class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
    }

    enqueue(value){
        let newNode = new Node(value);
        if(this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }

    dequeue() {
        if(this.length === 0) {
            console.log('Queue is empty!!');
            return;
        }
        if(this.first === this.last) {
            console.log(`Dequeued element: ${this.first.value}`);
            this.first = null;
            this.last = null;
        } else {
            console.log(`Dequeued element: ${this.first.value}`);
            this.first = this.first.next;
        }
        this.length--;
    }

    print() {
        if(this.length === 0) {
            console.log('Queue is empty!!');
            return;
        }
        let arr = [];
        let traversalNode = this.first;
        for(let i=0; i<this.length; i++) {
            arr.push(traversalNode.value);
            traversalNode = traversalNode.next;
        }
        console.log(arr);
        console.log(`First: ${this.first.value}`);
        console.log(`Last: ${this.last.value}`);
    }
}
  
  const myQueue = new Queue();
  myQueue.enqueue(1);
  myQueue.enqueue(2);
  myQueue.enqueue(3);
  myQueue.enqueue(4);
  myQueue.enqueue(5);
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.enqueue(0);
  myQueue.print();
//   console.log(JSON.stringify(myQueue.first, null, 4));
