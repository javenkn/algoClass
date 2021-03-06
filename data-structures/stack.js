/*

STACK

Abstract data type
LIFO - Last in, first out
Collection of elements with push and pop operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/pop method in your implementation. That's too easy, yeah? =P
Use an object as the underlying data structure.


*** Operations:

myStack.push(value)
=> count of stack
add value to collection

myStack.pop()
=> most recent element added collection
Remove item so that it is no longer in collection

myStack.peek()
=> most recent element added collection
Similiar to pop, but do not remove element from collection

myStack.count()
=> number of elements in stack


*** Additional Exercises:

Modify your stack to take a max capacity and return a string if you try to add an element when there's no more room:
myStack.push(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the stack:
myStack.contains('findme')
=> true/false
What's the time complexity? O(n)

Create an until method to get the number of pops until you get to a certain value:
stack values - (first)2-5-7-3-6-9(last)
myStack.until(7)
=> 4
What's the time complexity?



 */

"use strict";

class Stack {
  constructor(capacity) {
    this._storage = {};
    this._count = 0;
    this._capacity = capacity;
  }

  push(value) { // Time complexity: O(1)
    if(this._count < this._capacity) {
      this._storage[this._count++] = value;
      return this._count;
    }
    return "Max capacity already reached. Remove element before adding a new one.";
  }

  pop () { // Time complexity: O(1)
    let val = this._storage[--this._count];
    delete this._storage[this._count];
    return val;
  }

  peek () { // Time complexity: O(1)
    return this._storage[this._count - 1];
  }

  count () { // Time complexity: O(1)
    return this._count;
  }

  contains (value) { // Time complexity: O(n)
    for(var prop in this._storage) {
      if(this._storage[prop] === value) {
        return true;
      }
    }
    return false;
  }

  until (value) { // Time complexity: O(n)
    let counter = 1;
    for(var i = this._count-1; i >= 0; i--) {
      if(this._storage[i] === value) {
        return counter;
      }
      counter++;
    }
    return "Cannot be found.";
  }
}

let myStack = new Stack(3);
console.log(myStack.push('a'), 'should be 1');
console.log(myStack.push('b'), 'should be 2');
console.log(myStack.push('c'), 'should be 3');
console.log(myStack.push('d'), 'should be Max capacity reached');
console.log(myStack.pop(), 'should be c');
console.log(myStack.count(), 'should be 2');
console.log(myStack.peek(), 'should be b');
console.log(myStack.count(), 'should be 2');

class MinStack {
  constructor(capacity) {
    this._capacity = capacity;
    this._storage = {};
    this._count = 0;
    this._min = new Stack(capacity);
  }

  push (val) { // Time compmlexity: O(1)
    if(this._count < this._capacity) {
      if(this._min.peek() < val) {
        this._min.push(this._min.peek());
      } else {
        this._min.push(val);
      }
      this._storage[this._count++] = val;
      return this._count;
    }
    return "Max capacity already reached. Remove element before adding a new one.";
  }

  pop () { // Time complexity: O(1)
    this._min.pop();
    let val = this._storage[--this._count];
    delete this._storage[this._count];
    if(this._count < 0) {
      this._count = 0;
    }
    return val;
  }

  peek () { // Time complexity: O(1)
    return this._storage[this._count-1];
  }

  count () { // Time complexity: O(1)
    return this._count;
  }

  min () { // Time complexity: O(1)
    return this._min.peek();
  }
}

let minStack = new MinStack(3);
console.log(minStack.push('b'), 'should be 1');
console.log(minStack.push('c'), 'should be 2');
console.log(minStack.push('a'), 'should be 3');
console.log(minStack.min(), 'should be a');
console.log(minStack.push('d'), 'should be Max capacity reached');
console.log(minStack.pop(), 'should be a');
console.log(minStack.min(), 'should be b');
console.log(minStack.count(), 'should be 2');
console.log(minStack.peek(), 'should be c');
console.log(minStack.count(), 'should be 2');
// function Stack(capacity) {
//   // implement me...
// }

// Stack.prototype.push = function(value) {
//   // implement me...
// };
// // Time complexity:

// Stack.prototype.pop = function() {
//   // implement me...
// };
// // Time complexity:

// Stack.prototype.peek = function() {
//   // implement me...
// };
// // Time complexity:

// Stack.prototype.count = function() {
//   // implement me...
// };
// Time complexity:


/*
*** Exercises:

1. Implement a stack with a min method which returns the minimum element currently in the stack. This method should have O(1) time complexity. Make sure your implementation handles duplicates.

2. Sort a stack so that its elements are in ascending order.

3. Given a string, determine if the parenthesis in the string are balanced.
Ex: balancedParens( 'sqrt(5*(3+8)/(4-2))' ) => true
Ex: balancedParens( 'Math.min(5,(6-3))(' ) => false

4. Towers of Hanoi - https://en.wikipedia.org/wiki/Tower_of_Hanoi
You are given three towers (stacks) and N disks, each of different size. You can move the disks according to three constraints:
   1. only one disk can be moved at a time
   2. when moving a disk, you can only use pop (remove the top element) and push (add to the top of a stack)
   3. no disk can be placed on top of a disk that is smaller than it
The disks begin on tower#1. Write a function that will move the disks from tower#1 to tower#3 in such a way that none of the constraints are violated.
 */
