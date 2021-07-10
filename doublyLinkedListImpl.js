// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor(value) {
      this.head = new Node(value);
      this.tail = this.head;
      this.length = 1;
    }

    printList() {
        let outputArr = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            outputArr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(outputArr);
        console.log(this.length);
    }

    append(value) {
      let newNode = new Node(value);
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.length++;
    }

    prepend(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
    }

    traverseToIndex(index) {
        var count = 0;
        var currentNode = this.head;
        while(count < index-1) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }

    insert(index, value) {
        if(index <= 0) {
            this.prepend(value);
            return;
        }
        if(index > this.length-1){
            this.append(value);
            return;
        }
        
        let currentNode = this.traverseToIndex(index);
        let newNode = new Node(value);
        newNode.next = currentNode.next;
        newNode.prev = currentNode;
        currentNode.next.prev = newNode;
        currentNode.next = newNode;
        this.length++;
    }

    remove(index){
        if(this.length === 0) {
            console.log('List is empty!!');
            return;
        }
        if(index < 0 || index >= this.length) {
            console.log(`The value at index ${index} does not exist!`);
            return;
        }
        if(index === 0) {
            console.log(`Removed value: ${this.head.value}`);
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
            return;
        }
        let currentNode = this.traverseToIndex(index);
        console.log(`Removed value: ${currentNode.next.value}`);
        currentNode.next.prev = currentNode;
        currentNode.next = currentNode.next.next;
        this.length--;
    }
  }
  
  let myLinkedList = new LinkedList(1);
  myLinkedList.append(2);
  myLinkedList.append(3);
  myLinkedList.append(4);
  myLinkedList.append(5);
  myLinkedList.append(6);
  myLinkedList.prepend(0);
  myLinkedList.printList();
  myLinkedList.insert(3, "insert");
  myLinkedList.remove(6);
  myLinkedList.printList();

//   console.log(JSON.stringify(myLinkedList, null, 2));

//   console.log(myLinkedList);
//   console.log(myLinkedList.head);
//   console.log(myLinkedList.tail);
  
  
  
  