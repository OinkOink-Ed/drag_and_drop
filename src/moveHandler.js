import { DragElement } from "./DragElement";
import { MovingElement } from "./MovingElement";
import { ParentElement } from "./parentElement";

export function moveHandler(event) {
    console.log(event);

    MovingElement.setPageCoords({ x: event.pageX, y: event.pageY });
    MovingElement.move(DragElement.node, ParentElement.coords, DragElement.shifts);
}