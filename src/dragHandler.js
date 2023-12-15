import { DragElement } from "./DragElement";
import { MovingElement } from "./MovingElement";
import { cancelMoving } from "./cancelMoving";
import { moveHandler } from "./moveHandler";
import { ParentElement } from "./parentElement";

export function dragHandler(event) {
    event.preventDefault();

    if (event.check) {
        return
    };

    let dragObject;
    let parentObject;

    if (!event.target.closest("[dragitem]")) {
        return;
    };

    event.check = true;

    // Создаем экземпляр перемещаемого элемента и инициализируем его стартовые и/или константные значения
    dragObject = new DragElement(event.target);
    dragObject.setShifts({ x: event.clientX, y: event.clientY });

    //И Создаем экземпляр родителя ограничителя перемещения
    parentObject = new ParentElement(event.target, dragObject.sizes);

    // Устанавливаем координаты клика мыши относительно страницы
    MovingElement.setPageCoords({ x: event.pageX, y: event.pageY });

    //И рассчитывает координаты сразу после клика
    MovingElement.move(DragElement.node, ParentElement.coords, DragElement.shifts);

    // Вешаем событие отжатия клика
    document.addEventListener('pointerup', cancelMoving);

    //Запускаем событие перемещения
    document.addEventListener('pointermove', moveHandler);
};