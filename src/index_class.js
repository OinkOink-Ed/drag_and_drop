class DragBox {
    constructor(event, name) {
        this.element = event.target.closest(`.${name}`);
        // this.parent = element.parentElement;
        this.propetys = this.getProperty(name).style;
        this.position = this.propetys.position;
        this.zIndex = null;
        this.left = null;
        this.top = null;
        this.width = null;
        this.height = null;
        this.shiftX = null;
        this.shiftY = null;
        this.coords = null;

        this.getProperty();
    }

    getCoords(event) {
        return event.target.getBoundingClientRect();
    }

    getProperty(name) {
        const stylesheet = document.styleSheets[0];
        let newRule = null;
        [stylesheet.cssRules].find(rule => {
            for (let i = 0; i < rule.length; i++) {
                if (rule[i].selectorText === `.${name}`) newRule = rule[i];
            };
        });

        return newRule;
    }
}

class DragAndDrop {
    constructor(event) {
        event.preventDefault();

        //Здесь получается тоже агрегация ? Мне это чем - то напоминает то, как в функции вызываешь функцию.
        // this.element = new DragBox(event.target.closest(".item"));

        this.coords = this.element.getCoords(event);

        this.shiftX = event.clientX - this.coords.left;
        this.shiftY = event.clientY - this.coords.top;
        this.width = this.coords.width;
        this.height = this.coords.height;

        this.show();
    }

    show() {
        console.log(this.element);
    }
}

class Action {

    // Не, ну а как иначе передать необходимый контейнер, за пределы которого мы не сможем перемещать элемент я не знаю
    // По типизации разберусь потом
    constructor(eventName, dragConteiner, dragElement) {
        this.name = eventName;
        this.container = document.querySelector(`.${dragConteiner}`);

        // Вот тут похоже на агрегацию
        this.action = event => new DragBox(event, dragElement);
        this.container.addEventListener(this.name, this.action);
    }

    remove() {
        this.container.removeEventListener(this.name, this.action);
    }
}

// И тут я передаю имена классов - опять же когда и как показать, что ожидается именно имя класса html элементов
//По сути, если я решу использовать id или data и подобное, то мне менять только в constructore Action и конструкторе DragBox по одно строке
let action = new Action("pointerdown", "lists", "item");