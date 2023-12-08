import { GetPropertys } from "./GetPropertys";

export class DragBox {
    #className;
    #cssStyles;

    constructor(params, decorator) {
        this.#className = params.item;

        this.entity = decorator(params);

        this.#cssStyles = this.entity.propertys;
    };
};