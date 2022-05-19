// Binary tree traversal pg: 103
class BinarySearchTree {
  constructor(data) {
    this.root = {
      data: data,
      left: null,
      right: null,
    };
  }

  insertTo(node, key) {
    if (key < node.data) {
      if (node.left) {
        this.insertTo(node.left, key);
        return;
      } else {
        node.left = new Node(key);
      }
    } else {
      if (node.right) {
        this.insertTo(node.right, key);
        return;
      } else {
        node.right = new Node(key);
      }
    }
  }
}
// Tree Node Class
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
// in-order traversal
// In-order traversal means to
// 1. Visit the left child
// 2. Visit the current node
// 3. Visit the right child

function inOrder() {
  let currNode = this.node;
  let stack = [];

  while (stack.length || currNode) {
    if (currNode) {
      stack.push(currNode);
      currNode = currNode.left;
    } else {
      currNode = stack.pop();
      console.log(currNode.data);
      currNode = currNode.right;
    }
  }
}

function recursiveInorderTraversal(node) {
  if (node.left) {
    recursiveInorderTraversal(node.left);
  }
  if (node.data) {
    console.log(node.data);
  }
  if (node.right) {
    recursiveInorderTraversal(node.right);
  }
}

// pre-order traversal
// Pre-order traversal means to
// 1. Visit the current node
// 2. Visit the left child
// 3. Visit the right child

// iterative version

function preOrder() {
  let currNode = this.root;
  let stack = [];

  stack.push(currNode);
  while (stack.length || currentNode) {
    currNode = stack.pop();
    console.log(currNode.data);
    if (currNode.right) {
      stack.push(currNode.right);
    }
    if (currNode.left) {
      stack.push(currNode.left);
    }
  }
}

// recursive version
function preOrderRecursive() {
  if (node.data) {
    console.log(node.data);
  }
  if (node.left) {
    preOrderRecursive(node.left);
  }
  if (node.right) {
    preOrderRecursive(node.right);
  }
}

// post-order traversal
// 1. Visit the child
// 2. Visit the child
// 3. Visit the current node

function postOrder(){
    let currNode = this.root; 
    let stack = []; 
    let lastVisted = null; 

    while(stack.length || currNode){
        if(currNode){
            stack.push(currNode); 
            currNode = currNode.left; 
        } else {
            let peekNode = stack[stack.length - 1]; 
            if (peekNode.right && lastVisited !== peekNode.right){
                currNode = peekNode.right; 
            } else {
                console.log(currNode.data); 
                lastVisited = stack.pop()
            }
        }
    }
}

function recursivePostOrderTraversal(node){
    if (node.left){
        recursivePostOrderTraversal(node.left); 
    }

    if (node.data){
        console.log(node.data)
    }

    if (node.right){
        recursivePostOrderTraversal(node.right); 
    }
}
