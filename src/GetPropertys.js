export class GetPropertys {
    #propertys;

    constructor(params) {
        this.#getPropertys(params.item);
    }

    get propertys() {
        return this.#propertys;
    }

    #getPropertys(name) {
        const stylesheet = document.styleSheets[0];
        [stylesheet.cssRules].find(rule => {
            for (let i = 0; i < rule.length; i++) {
                if (rule[i].selectorText === `.${name}`) this.#propertys = rule[i].style;
            };
        });
    };
}