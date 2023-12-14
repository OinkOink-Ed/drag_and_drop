import { Action } from "./Action";
import { dragHandler } from "./dragHandler";

export function start() {
    new Action('draggbale');
    Action.add('pointerdown', dragHandler);
}

start();