export class Bag {
    #bag;

    constructor() {
        // Underlying DS is an array.
        this.#bag = [];
    }

    /**
     * Add an item to the bag.
     * @param {*} item The item to add to the bag.
     */
    addItem(item) {
        this.#bag.push(item);
    }

    /**
     * Is the bag empty.
     * @return {Boolean}
     */
    isEmpty() {
        return this.size() === 0;
    }

    /**
     * Returns the number of items in the bag.
     * @return {Number} The size of bag
     */
    size() {
        return this.#bag.length;
    }
}