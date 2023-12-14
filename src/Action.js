import { dragHandler } from "./dragHandler";

export class Action {
    static #nodes = document.querySelectorAll("[parent]");
    static #handler = dragHandler;

    static add() {
        for (let i = 0; i < this.#nodes.length; i++) {
            this.#nodes[i].addEventListener("pointerdown", event => this.#handler(event));
        };
    };

    static remove() {

    };
}; 