import { DragElement } from "./DragElement";
import { ParentElement } from "./parentElement";

export function findDroppable(event) {
    DragElement.node.style.setProperty("z-index", -1);

    let elem = document.elementFromPoint(event.clientX, event.clientY);

    DragElement.node.style.setProperty("z-index", 0);

    if (elem.hasAttribute("droppable")) {
        return elem;
    } else return DragElement.node.parentNode;
};