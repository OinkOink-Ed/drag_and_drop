import { GetCoords } from "./GetCoords";

let cordsCallBack = (values) => GetCoords.getCoords(values);

export class ParentElement {
    static #node;

    static #coords = {
        left: null,
        top: null,
        right: null,
        bottom: null,
    };

    constructor(node, obj) {
        ParentElement.#node = node.closest('[parent]');

        let { left, top, right, bottom } = cordsCallBack(ParentElement.#node);

        ParentElement.#coords.top = top;
        ParentElement.#coords.left = left;
        ParentElement.#coords.right = right - obj.width;
        ParentElement.#coords.bottom = bottom - obj.height;
    };

    static get node() {
        return this.#node;
    };

    static get coords() {
        return this.#coords;
    };
};