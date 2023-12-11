import { DragBox } from "./DragBox";
import { GetPropertys } from "./GetPropertys";
import { GetCoords } from "./GetCoords";
import { dragAndDrop } from "./dragAndDrop";

//Здесь нужно переписать чтобы в фигурировала функция, которая будет обработчиком события
//И все создания экзепляров класса и прочее проходили в ней

let obj = {
    eventName: "pointerdown",
    parentDroppableClassName: "lists",
    draggbleClassName: "item",
};

// Начальный параметр объекта для инициализации draggable элемента

//Декораторы подготовленные заранее
let cssDecoprator = value => new GetPropertys(value);
let coordsDecorator = value => new GetCoords(value);

// но есть же ещё вот такое:

// Тогда почему мне потом в классе dDragBox нужно при вызове декоратора передавать ему параметр, а не брать значение something во время описания декоратора? (второй скриншот)
// Это происходит из-за того, что я декоратору не привязываю контекст?

let test = new DragBox(obj);


// Вот эта инициализация параметров нужных для изменения стилей нужна только при клике
test.setCoords(coordsDecorator);
test.setCssStyles(cssDecoprator);