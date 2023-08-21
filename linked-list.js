/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  get(idx) {
    let current = this.head;
    let count = 0;

    while (current !== null && count !== idx) {
      count++;
      current = current.next
    }

    return current;
  }

  /** push(val): add new value to end of list. */

  push(val) {

    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;

    this.length++;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {

    let newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    if (this.length === 0) this.tail = this.head;
    this.length++;      
    



  }

  /** pop(): return & remove last item. */

  pop() {

    if (this.head === null) {
      throw new Error("List is already empty");
    }

    if (this.length === 1) {
      let node = this.head
      this.head = null;
      this.tail = null;
      this.length--;
      return node.val;
    }

    let current = this.head
    let count = 0;

    while (current !== null && count !== this.length - 2) {
      count++;
      current = current.next
    }

    this.tail = current;
    let returnValue = current.next.val
    current.next = current.next.next;
    this.length--;

    return returnValue;

  }

  /** shift(): return & remove first item. */

  shift() {
    let returnValue = this.head.val;
    this.head = this.head.next;
    this.length--;
    if (this.length < 2) this.tail = this.head;
    return returnValue;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index");
    }

    let current = this.get(idx);

    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index");
    }
    
    let current = this.get(idx);
    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

    if (idx > this.length || idx < 0) {
      throw new Error("Invalid index");
    }

    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    let newNode = new Node(val);

    let prev = this.get(idx-1);
    console.log(prev);

    newNode.next = prev.next
    prev.next = newNode
    this.length++;
  

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index");
    }

    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    let prev = this.get(idx-1);
    prev.next = prev.next.next; 


  }

  /** average(): return an average of all values in the list */

  average() {

    if (this.length === 0) return 0;

    let current = this.head;
    let accumulator = 0;
    
    while (current !== null) {
      accumulator += current.val;
      current = current.next;
    }

    return accumulator/this.length;
  }
}

module.exports = LinkedList;
