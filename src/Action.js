export class Action {
    static #nodes;
    static #handler;

    constructor(name) {
        Action.#nodes = document.querySelectorAll(`${name}`);
    }

    static add(name, func) {
        this.#handler = func;

        if (this.#nodes.length > 0) {
            for (let i = 0; i < this.#nodes.length; i++) {
                this.#nodes[i].addEventListener(`${name}`, event => this.#handler(event));
            };
        } else document.addEventListener(`${name}`, event => this.#handler(event));
    };

    static remove() {

    };
}; 