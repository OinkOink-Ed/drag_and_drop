import { Action } from "./Action";
import { dragHandler } from "./dragHandler";


// Объект с параметрами требующимися для реализации работы DragAndDrop
//Он передаётся извне в экспортируемую функцию
let obj = {
    eventName: "pointerdown",
    parentDroppableClassName: "lists",
    draggbleClassName: "item",
};

// Иницализация события pointerdown
// Здесь не захардкожено, чтобы с помощью Класса Action можно было создать другие события требующиеся для DragAndDrop
export function start(obj) {

    // Так я передаю только те параметры, которые нужны данному классу для инициализации события
    let initialize = new Action({ parentElementName: obj.parentDroppableClassName, eventName: obj.eventName });

    //А тут я привязываю к обработчику нужный в последствии контекст
    initialize.add((event) => dragHandler.call({ parent: obj.parentDroppableClassName, draggabaleName: obj.draggbleClassName }, event));

    //Можно сделать статический метод, чтобы удалять евент исходя из экземпляра класса, но тогда проблема другая, этот экземпляр мне нужен где-то ещё
    //А он находится только здесь
    Action.removeEvents.call(initialize);
};

start(obj);