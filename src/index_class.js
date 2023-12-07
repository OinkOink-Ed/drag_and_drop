class DragBox {
    #coords;
    #draggble;
    #propertys;
    #shiftX;
    #shiftY;

    constructor(event, name) {
        const { target } = event;

        this.#draggble = target;

        console.log(this.#draggble);

        // Вынести это в отдельный класс
        // this.#propertys = this.#getPropertys(name).style;

        // console.log(this.#propertys);

        this.#getPropertys(name);

        // Вынести это в отдельный класс
        this.#coords = Object.assign(this.#getCoords(target), this);

        // console.log(this.#coords);

        this.#shiftX = event.clientX - this.#coords.left;
        this.#shiftY = event.clientY - this.#coords.top;

        console.log(this.propertys);
    };

    #getCoords(element) {
        return element.getBoundingClientRect();
    };

    get propertys() {
        return this.#propertys;
    }

    // вытащить отсюда в отдельный класс (инкапсулировать его в DragBox)
    #getPropertys(name) {
        const stylesheet = document.styleSheets[0];
        let newRule = null;
        [stylesheet.cssRules].find(rule => {
            for (let i = 0; i < rule.length; i++) {
                if (rule[i].selectorText === `.${name}`) newRule = rule[i];
            };
        });

        this.#propertys = newRule.style;
    };
};

class DragAndDrop {
    constructor(event, name) {
        event.preventDefault();

        //Это композиця.... //тут нужно точно изменить
        this.draggable = new DragBox(event, name);
    };
}

class Action {
    #propertys
    #conteiner

    // Не, ну а как иначе передать необходимый контейнер, за пределы которого мы не сможем перемещать элемент я не знаю
    // По типизации разберусь потом
    constructor(params) {
        this.#propertys = Object.assign(params, this);
        this.#conteiner = document.querySelector(`.${this.#propertys.lists}`);

        // Вот тут похоже на агрегацию
        this.action = event => {
            if (event.target.closest(`.${this.#propertys.item}`)) new DragAndDrop(event, this.#propertys.item);
        };

        this.#conteiner.addEventListener(this.#propertys.eventName, this.action);
    }

    remove() {
        this.#conteiner.removeEventListener(this.#propertys.eventName, this.action);
    }
}

// И тут я передаю имена классов - опять же когда и как показать, что ожидается именно имя класса html элементов
//По сути, если я решу использовать id или data и подобное, то мне менять только в constructore Action и конструкторе DragBox по одно строке
let action = new Action({ eventName: "pointerdown", lists: "lists", item: "item" });