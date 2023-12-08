export class GetCoords {
    #propertys;

    #getCoords(element) {
        return element.getBoundingClientRect();
    };

    get propertys() {
        return this.#propertys;
    }
}