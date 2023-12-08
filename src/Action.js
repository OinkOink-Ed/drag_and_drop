export class Action {
    #conteiner;
    entity;
    // Не, ну а как иначе передать необходимый контейнер, за пределы которого мы не сможем перемещать элемент я не знаю
    // По типизации разберусь потом
    constructor(params) {
        Object.assign(this, params);

        this.#conteiner = document.querySelector(`.${this.lists}`);
        this.#conteiner.addEventListener(this.eventName, this.#add.bind(this));
    }

    #add(event) {
        if (event.target.closest(`.${this.item}`)) {
            this.entity = new DragAndDrop(event);
        }
    }

    #remove() {
        this.#conteiner.removeEventListener(this.eventName, this.#add);
    }
}