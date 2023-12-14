export class MovingElement {
    static #x;
    static #y;

    static setPageCoords(obj) {
        this.#x = obj.x;
        this.#y = obj.y;
    };

    static move(node, coords, shifts) {
        // Смещаем с учетом границ родительского элемента заданного классом в html

        if (this.#x <= coords.left + shifts.shiftX) {
            node.style.setProperty("left", coords.left + "px");
        } else if (this.#x >= coords.right + shifts.shiftX) {
            node.style.setProperty("left", coords.right + "px");
        } else node.style.setProperty("left", this.#x - shifts.shiftX + "px");

        if (this.#y <= coords.top + shifts.shiftY) {
            node.style.setProperty("top", coords.top + "px");
        } else if (this.#y >= coords.bottom + shifts.shiftY) {
            node.style.setProperty("top", coords.bottom + "px");
        } else node.style.setProperty("top", this.#y - shifts.shiftY + "px");
    };
};