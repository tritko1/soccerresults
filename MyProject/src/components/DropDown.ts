export default class DropDown {
    dropDown: HTMLSelectElement;
    options: HTMLOptionsCollection;

    constructor(dropDown: HTMLSelectElement) {
        this.dropDown = dropDown;
        this.options = dropDown.options;
    }


}