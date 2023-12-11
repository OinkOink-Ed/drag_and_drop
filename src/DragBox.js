//Здесь мы ничечго не меняем

export class DragBox {
    #className;
    #cssStyles;
    #coords;
    #nodeElement
    #shift;

    constructor(obj) {
        const { draggbleClassName } = obj;
        this.#className = draggbleClassName;
        this.#nodeElement = document.querySelector(`.${this.#className}`);
    };

    #calc() {

    };

    setCoords(decorator) {
        // Здесь ещё вопрос о том, какой элемент мы получаем
        this.#coords = decorator(this.#nodeElement).propertys;
        console.log(this.#coords);
    };

    setCssStyles(decorator) {
        this.#cssStyles = decorator(this.#className).propertys;
        console.log(this.#cssStyles);
    };
};