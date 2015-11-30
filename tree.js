function Node(i, l, r){
    this.item = i;
    this.left = l;
    this.right = r;
}

function BST(){
    this.root = null;
}

BST.prototype.addNode = function(currentNode, e){
   if(e < currentNode.item){
       if(currentNode.left == null){
            currentNode.left = new Node(e, null, null);     
       }else{
            this.addNode(currentNode.left, e);
       }
   }else{
       if(currentNode.right == null){
            currentNode.right = new Node(e, null, null);     
       }else{
            this.addNode(currentNode.right, e);
       }
   }
}

BST.prototype.add = function(e){
    if(this.root == null){
        this.root = new Node(e, null, null);
    }else{
        this.addNode(this.root, e);
    }
}

BST.prototype.existNode = function(currentNode, e){
    if(currentNode == null){
        return false;
    }
    else if(currentNode.item == e){
        return true;
    }
    else{
        if(e < currentNode.item){
            return this.existNode(currentNode.left, e);
        }else{
            return this.existNode(currentNode.right, e);
        }
    }
}

BST.prototype.exist = function(e){
    return this.existNode(this.root, e);
}

//CALLBACK EXAMPLE!!!!! PT.1
function inOrder(node, callback){
    if(node != null){
        inOrder(node.left, callback);
        callback(node.item);
        inOrder(node.right, callback);
    }
}

function preOrder(node, callback){
    if(node != null){
        callback(node.item);
        preOrder(node.left, callback);
        preOrder(node.right, callback);
    }
}

function postOrder(node, callback){
    if(node != null){
        postOrder(node.left, callback);
        postOrder(node.right, callback);
        callback(node.item);
    }
}

var tree = new BST();
tree.add(20);
tree.add(10);
tree.add(15);
tree.add(5);
tree.exist(5);

//CALLBACK EXAMPLE!!!!! PT.2
postOrder(tree.root, function(e){
    console.log(e);
});