class Stack {
  constructor() {
        this.arr = [];
    }
    push(value) {
        this.arr.push(value);
        return this.arr;
    }
    pop() {
      this.arr.pop();
    }
    peek(i = this.arr.length-1) {
      return this.arr[i];
    }
    reverse() {
      return this.arr.reverse();
    }
    isEmpty() {
      return this.arr.length === 0;
    }
    displayStack() {
      return this.arr.join(" ");
    }
    get length() {
      return this.arr.length;
    }
}

// Test

let myStack = new Stack();
myStack.push('One');
myStack.push('Two');
console.log(myStack.length); // 2
console.log(myStack.peek()); // "Two"
console.log(myStack.peek(0)); // "One"
console.log(myStack.reverse()); // ['Two', 'One']
console.log(myStack.displayStack()); // 'Two One'
myStack.pop();
console.log(myStack.length); // 1
console.log(myStack.peek()); // 'Two'
console.log(myStack.isEmpty()); // false
myStack.pop();
console.log(myStack.isEmpty()); // true