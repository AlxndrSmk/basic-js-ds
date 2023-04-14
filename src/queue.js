const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    this.head = addNode(this.head, value);

    function addNode(nodeList, value) {
      if (!nodeList) return new ListNode(value);
      else {
        nodeList.next = addNode(nodeList.next, value);
      }

      return nodeList;
    }
  }

  dequeue() {
    let current = this.head.value;
    this.head = this.head.next;
    return current;
  }
}

module.exports = {
  Queue
};
