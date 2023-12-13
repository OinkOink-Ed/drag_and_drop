import { DragElement } from "./DragElement";

export function dragHandler(event) {
    if (!event.target.closest(".item")) {
        return;
    };

    console.log(this.draggabaleName);
};