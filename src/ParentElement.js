import { GetCoords } from "./GetCoords";

let cordsCallBack = (values) => GetCoords.getCoords(values);

export class ParentElement {
    static #coords = {
        left: null,
        top: null,
        right: null,
        bottom: null,
    };

    constructor(node, obj) {
        let { left, top, right, bottom } = cordsCallBack(node);

        ParentElement.#coords.top = top;
        ParentElement.#coords.left = left;
        ParentElement.#coords.right = right - obj.width;
        ParentElement.#coords.bottom = bottom - obj.height;
    };

    static get coords() {
        return this.#coords;
    }
};