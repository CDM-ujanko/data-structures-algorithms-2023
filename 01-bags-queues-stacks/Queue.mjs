export class Queue {
    #queue;

    constructor() {
        this.#queue = [];
    }

    enqueue(item) {
        this.#queue.push(item)
    }

    dequeue() {
        return this.#queue.shift();
    }

    isEmpty() {
        return this.#queue.size() === 0
    }

    size() {
        return this.#queue.length;
    }


    // Item dequeue() remove the least recently added item
    // boolean isEmpty() is the queue empty?
    // int size() number of items in the queue
}