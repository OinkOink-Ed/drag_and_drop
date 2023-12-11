// Это штука нам не нужна, вместо неё бахнем функцию, которую передадим как обработчик
// Или класс оставим, но назовём иначе и обрежем функционал до вызова функции, которяа была передана в класс с помощью декоратора

export class dragAndDrop {
    #node;
    #eventName;
    #entity;
    #targetNode;

    constructor(obj, entity) {
        this.#entity = entity;
        this.#eventName = obj.eventName;
        this.#node = document.querySelector(`.${obj.parentDroppableClassName}`)

        this.action = event => this.#add(event);
        this.#node.addEventListener(`${this.#eventName}`, this.action)
    };

    craete() {

    }

    #add(event) {
        if (event.target.closest(".item")) {
            this.#targetNode = event.target;
            this.craete(this.#entity);
        };
    };

    #remove() {
        this.#node.removeEventListener(this.#eventName, this.action);
    }
} 