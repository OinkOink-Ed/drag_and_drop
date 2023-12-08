export class DragAndDrop extends Action {
    constructor(event) {
        event.preventDefault();

        this.createEntity()
    };
}