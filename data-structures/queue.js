/*

QUEUE

Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.


*** Operations:

myQueue.enqueue(value)
=> count of queue
add value to collection

myQueue.dequeue()
=> oldest element added collection
Remove item so that it is no longer in collection

myQueue.peek()
=> oldest element added collection
Similiar to dequeue, but do not remove element from collection

myQueue.count()
=> number of elements in queue


*** Additional Exercises:

Modify your queue to take a max capacity and return a string if you try to add an element when there's no more room:
myQueue.enqueue(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the queue:
myQueue.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of dequeues until you get to a certain value:
queue values - (first)2-5-7-3-6-9(last)
myQueue.until(7)
=> 3
What's the time complexity?




 */

"use strict";

class Queue {
  constructor(capacity) {
    this._capacity = capacity;
    this._storage = {};
    this._head = 0;
    this._tail = 0;
  }

  enqueue (val) { // Time complexity: O(1)
    if(this.count() < this._capacity) {
      this._storage[this._tail++] = val;
      return this.count();
    }
    return "Max capacity already reached. Remove element before adding a new one.";
  }

  dequeue () { // Time complexity: O(1)
    let val = this._storage[this._head];
    delete this._storage[this._head];
    if(this._head < this._tail) this._head++;
    return val;
  }

  peek () { // Time complexity: O(1)
    return this._storage[this._head];
  }

  count () { // Time complexity: O(1)
    return this._tail - this._head;
  }

  contains (val) { // Time complexity: O(n)
    for(let i = this._head; i < this._tail; i++) {
      if(this._storage[i] === val) return true;
    }
    return false;
  }

  until (val) { // Time complexity: O(n)
    for(let i = this._head; i < this._tail; i++) {
      if(this._storage[i] === val) return i - this._head+1;
    }
    return "Cannot be found.";
  }
}

let myQueue = new Queue(3);
console.log(myQueue.enqueue('a'), 'should be 1');
console.log(myQueue.enqueue('b'), 'should be 2');
console.log(myQueue.enqueue('c'), 'should be 3');
console.log(myQueue.enqueue('d'), 'should be Max capacity reached');
console.log(myQueue.dequeue(), 'should be a');
console.log(myQueue.count(), 'should be 2');
console.log(myQueue.peek(), 'should be b');
console.log(myQueue.count(), 'should be 2');
console.log(myQueue.contains('b'), 'should be true');
console.log(myQueue.contains('d'), 'should be false');
console.log(myQueue._storage, myQueue._head);
console.log(myQueue.until('b'), 'should be 1');
console.log(myQueue.until('c'), 'should be 2');
console.log(myQueue.until('d'), 'should be null');
//

class Stack {
  constructor(capacity) {
    this._capacity = capacity;
    this._storage = {};
    this._count = 0;
  }

  push (val) {
    if(this._count < this._capacity) {
      this._storage[this._count++] = val;
      return this._count;
    }
    return "Max capacity already reached. Remove element before adding a new one.";
  }

  pop () {
    let val = this._storage[--this._count];
    delete this._storage[this._count];
    if(this._count < 0) this._count = 0;
    return val;
  }

  peek () {
    return this._storage[this._count-1];
  }

  count () {
    return this._count;
  }

}

class Queue_TwoStacks {
  constructor (capacity) {
    this._in = new Stack(capacity);
    this._out = new Stack(capacity);
  }

  enqueue (val) {
    return this._in.push(val);
  }

  _transferStacks () {
    while(this._in.count() > 0) {
      this._out.push(this._in.pop());
    }
  }

  dequeue () {
    if(this._out.count() === 0) this._transferStacks();
    return this._out.pop();
  }

  peek () {
    if(this._out.count() === 0) this._transferStacks();
    return this._out.peek();
  }

  count () {
    return this._in.count() + this._out.count();
  }
}

console.log('----Two Stacks----');
let myQueue_TwoStacks = new Queue_TwoStacks(3);
console.log(myQueue_TwoStacks.enqueue('a'), 'should be 1');
console.log(myQueue_TwoStacks.enqueue('b'), 'should be 2');
console.log(myQueue_TwoStacks.enqueue('c'), 'should be 3');
console.log(myQueue_TwoStacks.enqueue('d'), 'should be Max capacity reached');
console.log(myQueue_TwoStacks.dequeue(), 'should be a');
console.log(myQueue_TwoStacks.count(), 'should be 2');
console.log(myQueue_TwoStacks.peek(), 'should be b');
console.log(myQueue_TwoStacks.count(), 'should be 2');

// function Queue(capacity) {
//   // implement me...
// }

// Queue.prototype.enqueue = function(value) {
//   // implement me...
// };
// // Time complexity:

// Queue.prototype.dequeue = function() {
//   // implement me...
// };
// // Time complexity:

// Queue.prototype.peek = function() {
//   // implement me...
// };

// Queue.prototype.count = function() {
//   // implement me...
// };
// // Time complexity:



/*
*** Exercises:

1. Implement a queue using two stacks.

2. Implement a double-ended queue, with the following methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.

3. Given a tree, print out the value of each node in breadth-first order using a queue data structure.


 */
