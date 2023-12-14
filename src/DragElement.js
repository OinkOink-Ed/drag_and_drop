import { GetCoords } from "./GetCoords";

let cordsCallBack = (values) => GetCoords.getCoords(values);

// Пока что делаю все свойсва приватными, дальше будет понятно
export class DragElement {
    static #node;

    #startCoords = {
        left: null,
        top: null,
    };

    #sizesElement = {
        width: null,
        height: null,
    }

    static #shifts = {
        shiftX: null,
        shiftY: null,
    };

    constructor(node) {
        DragElement.#node = node;

        const { left, top, width, height } = cordsCallBack(node);

        this.#startCoords.left = left;
        this.#startCoords.top = top;
        this.#sizesElement.width = width;
        this.#sizesElement.height = height;

        DragElement.#node.style.setProperty("position", "absolute");
        DragElement.#node.style.setProperty("z-index", 10);
    };

    get sizes() {
        return this.#sizesElement;
    };

    static get node() {
        return this.#node;
    }

    static get shifts() {
        return this.#shifts;
    }

    setShifts(obj) {
        DragElement.#shifts.shiftX = obj.x - this.#startCoords.left;
        DragElement.#shifts.shiftY = obj.y - this.#startCoords.top;
    };
}