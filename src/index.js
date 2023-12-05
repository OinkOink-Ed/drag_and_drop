// Можно выйти за пределы окна lists - а так не хочу

// Созадим объект для хранения информации о перемещаемом элементе
let dragObject = {}

// Ограничиваем перемещение по контейнеру
function movementFrame(x, y) {
    if (dragObject.element.style.top <= dragObject.parentDroppableBottom && dragObject.element.style.top >= dragObject.parentDroppableTop) {
        moveAt(x, y);
        // нужно подумать как можно ограничить
    }
}

// Функция рассчиывающая изначальное положение элемента, который мы собираемся двигать
// event.pageX - это MouseEvent.pageX - координата клика с учётом scroll.
function moveAt(x, y) {
    dragObject.element.style.position = 'absolute';
    dragObject.element.style.zIndex = 1000;

    dragObject.element.style.top = y - dragObject.shiftY + "px";
    dragObject.element.style.left = x - dragObject.shiftX + "px";
}

//функция, которая вызывается при срабатывании события pointermove 
function moving(event) {
    movementFrame(event.pageX, event.pageY);
}

// Функция которая вызывается при событии pointerup, удаляющая обработчик и свой тоже 
function cancelMoving() {
    document.removeEventListener("pointermove", moving);
    document.removeEventListener("pointerup", cancelMoving);
}

function dragAndDrop(e) {
    dragObject.element = e.target.closest(".draggable");

    if (!dragObject.element == true) return;

    // Получаем координаты элемента
    let coords = e.target.getBoundingClientRect();

    // Рассчитываем координаты в px от клика до левой и верхней границы элемента, clientX - это MouseEvent.clientX - координата клика без учёта scroll
    dragObject.shiftX = e.clientX - coords.left;
    dragObject.shiftY = e.clientY - coords.top;


    // Получаем координаты области перемещения
    let parent = dragObject.element.closest(".parent-droppable");
    let parentCoords = parent.getBoundingClientRect();

    // Рассчитываем и храним все 4 стороны
    dragObject.parentDroppableTop = parentCoords.top + "px";
    dragObject.parentDroppableLeft = parentCoords.left + "px";
    dragObject.parentDroppableRight = parentCoords.right - coords.width + "px";
    dragObject.parentDroppableBottom = parentCoords.bottom - coords.height + "px";

    moveAt(e.pageX, e.pageY);

    document.addEventListener("pointermove", moving);
    document.addEventListener("pointerup", cancelMoving);
}

let dragContainer = document.querySelector(".lists");

dragContainer.addEventListener("pointerdown", dragAndDrop);