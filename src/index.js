import { dragHandler } from "./dragHandler";


// Вообще это всё работает только с одной группой пермещаемых элементов - отстой
export function start() {
    let nodes = document.querySelectorAll('[parent]');

    for (let i = 0; i < nodes.length; i++) {
        nodes[i].addEventListener("pointerdown", dragHandler);
    };
};

start();