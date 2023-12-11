export class GetCoords {
    #propertys;

    constructor(...params) {
        console.log(params);
    }

    #getCoords(element) {
        return element.getBoundingClientRect();
    };

    get propertys() {
        return this.#propertys;
    }
}