let dragContainer = document.querySelector(".parent-droppable");

dragContainer.addEventListener("pointerdown", dragAndDrop);

// Созадим объект для хранения информации о перемещаемом элементе
let dragObject = {};

// И ещё объект для хранения информации о границах контейнера, в котором объект можно перемещать
let parentObject = {};

// Функция двигающая элемент
function moveAt(x, y) {
    dragObject.element.style.setProperty("position", "absolute");
    dragObject.element.style.setProperty("z-index", 0);

    // Смещаем с учетом границ родительского элемента заданного классом в html

    if (x <= parentObject.left + dragObject.shiftX) {
        dragObject.element.style.setProperty("left", parentObject.left + "px");
    } else if (x >= parentObject.right + dragObject.shiftX) {
        dragObject.element.style.setProperty("left", parentObject.right + "px");
    } else dragObject.element.style.setProperty("left", x - dragObject.shiftX + "px");

    if (y <= parentObject.top + dragObject.shiftY) {
        dragObject.element.style.setProperty("top", parentObject.top + "px");
    } else if (y >= parentObject.bottom + dragObject.shiftY) {
        dragObject.element.style.setProperty("top", parentObject.bottom + "px");
    } else dragObject.element.style.setProperty("top", y - dragObject.shiftY + "px");
};

//функция, которая вызывается при срабатывании события pointermove 
function moving(event) {
    document.addEventListener("pointerup", cancelMoving);
    moveAt(event.pageX, event.pageY);
};

function findDroppable(e) {
    dragObject.element.style.setProperty("z-index", -1);

    let elem = document.elementFromPoint(e.clientX, e.clientY);

    dragObject.element.style.setProperty("z-index", 0);

    console.log(elem.classList);

    if (elem.classList == "droppable") {
        return elem;
    } else return elem.closest(".droppable");
};

// Функция которая вызывается при событии pointerup, удаляющая обработчик и свой тоже 
function cancelMoving(event) {
    let destination = findDroppable(event);

    dragObject.element.style.removeProperty("position");
    dragObject.element.style.removeProperty("z-index");
    dragObject.element.style.removeProperty("left");
    dragObject.element.style.removeProperty("top");

    if (destination) {
        destination.append(dragObject.element);
    } else {
        dragObject.old.parent.append(dragObject.element);
    };

    document.removeEventListener("pointermove", moving);
    document.removeEventListener("pointerup", cancelMoving);

    dragObject = {};
    parentObject = {};
};

function dragAndDrop(e) {
    e.preventDefault();

    dragObject.element = e.target.closest(".draggable");

    if (!dragObject.element == true) return;

    //Сохраним изначальные значения
    dragObject.old = {
        parent: dragObject.element.parentNode,
    };

    // Получаем координаты элемента
    let coords = e.target.getBoundingClientRect();

    // Рассчитываем координаты в px от клика до левой и верхней границы элемента, clientX - это MouseEvent.clientX - координата клика с учётом скролл
    dragObject.shiftX = e.clientX - coords.left;
    dragObject.shiftY = e.clientY - coords.top;
    dragObject.width = coords.width;
    dragObject.height = coords.height;

    // Получаем координаты области перемещения
    let parent = dragObject.element.closest(".parent-droppable");
    let parentCoords = parent.getBoundingClientRect();

    // Рассчитываем и храним все 4 стороны
    parentObject.top = parentCoords.top;
    parentObject.left = parentCoords.left;
    parentObject.right = parentCoords.right - coords.width;
    parentObject.bottom = parentCoords.bottom - coords.height;

    moveAt(e.pageX, e.pageY);

    document.addEventListener("pointermove", moving);
};