class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(){
      this.top = null;
      this.length = 0;
    }

    peek() {
        console.log(`Peek value: ${this.top.value}`);
        return;
    }

    push(value){
        let newNode = new Node(value);
        if(this.isEmpty()) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }       
        this.length++;
    }

    pop(){
        if(this.isEmpty()) {
            console.log('Stack is empty!');
            return;
        }
        if(this.top && (this.top.next === null)) {
            console.log(`Popped element: ${this.top.value}`);
            this.top = null;
        } else {
            console.log(`Popped element: ${this.top.value}`);
            this.top = this.top.next;
        }
        this.length--;
    }

    print() {
        if(this.isEmpty()) {
            console.log("Stack is empty!");
            return;
        }
        let arr = [];
        let traversalNode = this.top;
        for(let i=0; i<this.length; i++) {
            arr.push(traversalNode.value);
            traversalNode = traversalNode.next;
        }
        console.log(arr);
    }

    isEmpty(){
        if(this.top === null) {
            return true;
        } else {
            return false;
        }
    }
  }
  
  const myStack = new Stack();
  myStack.push(1);
  myStack.push(2);
  myStack.push(3);
  myStack.push(4);
  myStack.push(5);
  myStack.push(6);
//   console.log(JSON.stringify(myStack.top, null, 4));
  myStack.peek();
  myStack.pop();
  myStack.pop();
  myStack.print();
  
  //Discord
  //Udemy
  //google