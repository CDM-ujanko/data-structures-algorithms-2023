import {Bag} from './Bag.mjs';

let bag = new Bag();

console.log(bag.size());
console.log(bag.isEmpty());

bag.addItem('pera');

console.log(bag.size());
console.log(bag.isEmpty());

