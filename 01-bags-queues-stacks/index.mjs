import {Bag} from './Bag.mjs';
import {Queue} from './Queue.mjs';

// let bag = new Bag();
//
// console.log(bag.size());
// console.log(bag.isEmpty());
//
// bag.addItem('pera');
//
// console.log(bag.size());
// console.log(bag.isEmpty());

let queue = new Queue()
queue.enqueue('a', 'pera', 'zika');
console.log(queue.size());

queue.enqueue('b')
queue.enqueue('c')


console.log(queue.size())
console.log(queue.dequeue());
console.log(queue.size())
