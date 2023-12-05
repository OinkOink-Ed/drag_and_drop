// Можно выйти за пределы окна lists - а так не хочу

function dragAndDrop(e) {
    let element = e.target.closest(".draggable");

    if (!element == true) return;

    // Получаем координаты элемента
    let coords = e.target.getBoundingClientRect();

    // Рассчитываем координаты в px от клика до левой и верхней границы элемента, clientX - это MouseEvent.clientX - координата клика без учёта scroll
    let shiftX = e.clientX - coords.left;
    let shiftY = e.clientY - coords.top;

    element.style.position = 'absolute';
    element.style.zIndex = 1000;

    // Функция рассчиывающая изначальное положение элемента, который мы собираемся двигать
    // event.pageX - это MouseEvent.pageX - координата клика с учётом scroll
    moveAt(e.pageX, e.pageY);

    // Функция двигающая элемент
    function moveAt(x, y) {
        element.style.top = y - shiftY + 'px';
        element.style.left = x - shiftX + 'px';
    }

    //функция, которая вызывается при срабатывании события pointermove
    function moving(event) {
        moveAt(event.pageX, event.pageY);
    }

    // Функция которая вызывается при событии pointerup, удаляющая обработчик и свой тоже 
    function cancelMoving() {
        document.removeEventListener("pointermove", moving);
        document.removeEventListener("pointerup", cancelMoving);
    }

    document.addEventListener("pointermove", moving);
    document.addEventListener("pointerup", cancelMoving);
}

let dragContainer = document.querySelector(".lists");

dragContainer.addEventListener("pointerdown", dragAndDrop);