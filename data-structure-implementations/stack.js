class Stack {
  constructor () {
    this.stack = [];
  }

  push (item) {
    return this.stack.push(item);
  }

  pop () {
    return this.stack.pop();
  }

  peek () {
    return this.stack[this.stack.length - 1];
  }

  isEmpty () {
    return this.stack.length === 0;
  }

  length () {
    return this.stack.length;
  }
}