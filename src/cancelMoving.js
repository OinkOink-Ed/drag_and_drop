import { DragElement } from "./DragElement";
import { findDroppable } from "./findDroppable";
import { moveHandler } from "./moveHandler";

export function cancelMoving(event) {
    const destination = findDroppable(event);

    console.log(destination);

    DragElement.node.style.removeProperty("position");
    DragElement.node.style.removeProperty("z-index");
    DragElement.node.style.removeProperty("left");
    DragElement.node.style.removeProperty("top");

    if (destination) {
        destination.append(DragElement.node);
    };

    document.removeEventListener('pointermove', moveHandler);
    document.removeEventListener('pointerup', cancelMoving);
};