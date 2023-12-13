// Класс отвечающий за событие, которое передал пользователь

export class Action {
    entity = {};
    #node;

    constructor(obj) {
        this.entity = obj;
        this.#node = document.querySelector(`.${obj.parentElementName}`);
    };

    add(handler) {
        this.handler = event => handler(event);
        this.#node.addEventListener(`${this.entity.eventName}`, this.handler);
    };

    remove() {
        this.#node.removeEventListener(`${this.entity.eventName}`, this.handler);
    }

    // А как сделать так, чтобы. ОПА!
    static removeEvents() {
        this.remove();
    };
} 