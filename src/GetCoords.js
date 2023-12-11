export class GetCoords {
    #propertys;

    constructor(node) {
        this.#propertys = this.#getCoords(node);
    };

    #getCoords(element) {
        return element.getBoundingClientRect();
    };

    get propertys() {
        return this.#propertys;
    };
}