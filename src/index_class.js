import { DragBox } from "./DragBox";
import { GetPropertys } from "./GetPropertys";

let params = {
    item: "item",
};

let cssDecoprator = sumthing => new GetPropertys(sumthing);

let test = new DragBox(params, cssDecoprator);