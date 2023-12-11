import { DragBox } from "./DragBox";
import { GetPropertys } from "./GetPropertys";
import { GetCoords } from "./GetCoords";

let params = {
    item: "item",
};

let cssDecoprator = somthing => new GetPropertys(somthing);
let coordsDecorator = somthing => new GetCoords(somthing);

let test = new DragBox(params, coordsDecorator);