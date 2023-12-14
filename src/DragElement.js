import { GetCoords } from "./GetCoords";

let cordsCallBack = (values) => GetCoords.getCoords(values);

// Пока что делаю все свойсва приватными, дальше будет понятно
export class DragElement {
    node;

    #startCoords = {
        left: null,
        top: null,
    };

    #sizesElement = {
        width: null,
        height: null,
    }

    static shifts = {
        shiftX: null,
        shiftY: null,
    };

    constructor(node) {
        this.node = node;

        const { left, top, width, height } = cordsCallBack(node);

        this.#startCoords.left = left;
        this.#startCoords.top = top;
        this.#sizesElement.width = width;
        this.#sizesElement.height = height;

        this.node.style.setProperty("position", "absolute");
        this.node.style.setProperty("z-index", 10);
    };

    get sizes() {
        return this.#sizesElement;
    }

    setShifts(obj) {
        DragElement.shifts.shiftX = obj.x - this.#startCoords.left;
        DragElement.shifts.shiftY = obj.y - this.#startCoords.top;
    };
}