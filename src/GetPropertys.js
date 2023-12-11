export class GetPropertys {
    #propertys;

    constructor(name) {
        this.#getPropertys(name);
    };

    get propertys() {
        return this.#propertys;
    };

    #getPropertys(name) {
        const stylesheet = document.styleSheets[0];
        [stylesheet.cssRules].find(rule => {
            for (let i = 0; i < rule.length; i++) {
                if (rule[i].selectorText === `.${name}`) this.#propertys = rule[i].style;
            };
        });
    };
};