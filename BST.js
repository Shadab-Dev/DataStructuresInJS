class Node {
    constructor(value){
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor(){
      this.root = null;
    }

    insert(value){
      let newNode = new Node(value);
      if(this.root === null) {
        this.root = newNode;
        return;
      }

      let traversalNode = this.root;
      while(true) {
        if(value < traversalNode.value){
          if(!traversalNode.left) {
            traversalNode.left = newNode;
            return;
          }
          traversalNode = traversalNode.left;
        }
        else {
          if(!traversalNode.right) {
            traversalNode.right = newNode;
            return;
          }
          traversalNode = traversalNode.right;
        }
        
      }
    }

    lookup(value){
      if(!this.root) {
        return false;
      }
      
    }
    
    // remove
  }
  
  const tree = new BinarySearchTree();
  tree.insert(9)
  tree.insert(4)
  tree.insert(6)
  tree.insert(20)
  tree.insert(170)
  tree.insert(15)
  tree.insert(1)
  console.log(JSON.stringify(traverse(tree.root), null, 2));
  //     9
  //  4     20
  //1  6  15  170
  
  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }
  
  
  