////////////////////////////////////////////////////////////// 
//////////////////////////////////////////////////////////////classe stack
function Stack(){
	this.myarray = [];
}

Stack.prototype.push = function(e) { 
    this.myarray.push(e);  
    }

Stack.prototype.pop = function() { 
    return this.myarray.pop(); 
    }

Stack.prototype.peek = function() { 
    return this.myarray[this.myarray.length -1] 
    }

Stack.prototype.isEmpty = function() { 
    return this.myarray.length == 0; 
    }
////////////////////////////////////////////////////////////// 
//////////////////////////////////////////////////////////////classe list
function LNode(indexNode,value,succNode){
    this.item=value;
    this.index=indexNode;
    this.succ=succNode;
}


function LinkedList(){
    this.root=null;
}
//add
LinkedList.prototype.addNode=function(prevNode,index,e,nextNode){
    if (index>prevNode.index){
        if(index<nextNode.index || nextNode==0){
            prevNode.succ=new LNode(index,e,nextNode);
            }else{
              this.addNode(nextNode,index,e,nextNode.succ);  
            }
    }else{
          this.root=new LNode(index,e,prevNode); 
    }

}
LinkedList.prototype.add=function(index,e){
    if (this.root==null){
        this.root=new LNode(index,e,0);
    }else {
        this.addNode(this.root, index, e, this.root.succ);

    }
}
//get
LinkedList.prototype.getNode= function(nextNode,index){
    if(nextNode.index==index){
        return nextNode;
    }else{
        return this.getNode(nextNode.succ,index);
    }
}
LinkedList.prototype.get= function (index){
    return this.getNode(this.root,index);

}
////////////////////////////////////////////////////////////// 
//////////////////////////////////////////////////////////////es1_1
function primoric(array){
    if(array.length == 0){
        return 10;
    }else{
        return (5 * array[0]) + primoric(array.slice(1));
    }
}
function ex_1a(array){
    return primoric(array);
}
////////////////////////////////////////////////////////////// 
//////////////////////////////////////////////////////////////es1_2
function sommaquadrR(array){
    if(array.length == 0){
        return 0;
    }else{
        if(array[0]%2 == 0){
            return (array[0] * array[0]) + sommaquadr(array.slice(1));
        }else{
            return sommaquadr(array.slice(1));
        }
    }
}
function ex_1b(array){
    return sommaquadrR(array);
}
////////////////////////////////////////////////////////////// 
//////////////////////////////////////////////////////////////es2
function sumSquareEvenF(a){
    return a.filter(x => x%2==0).reduce((acc,x) => acc+x*x,0);
}

function ex_2(a){
    return sumSquareEvenF(a);
}
////////////////////////////////////////////////////////////// 
//////////////////////////////////////////////////////////////es3
function molt(array){
    var pari = new Stack();
    var dispari = new Stack();
    var result = new Stack();
    var a = null;
    var b = null;

    for(var i = 0; i < array.length; i++){
        if(array[i]%2 == 0){
            pari.push(array[i]);
        }else{
            dispari.push(array[i]);
        }
    }

    while(!pari.isEmpty() || !dispari.isEmpty()){
        a = pari.pop();
        b = dispari.pop();
        result.push(a*b);
    }

    return result;
}
function ex_3(array){
    return molt(array);
}
////////////////////////////////////////////////////////////// 
//////////////////////////////////////////////////////////////es5
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

BST.prototype.searchnode = function(currentNode, e){
    if(currentNode == null){
        return null;
    }
    else if(currentNode.item == e){
        return currentNode;
    }
    else{
        if(e < currentNode.item){
            return this.existNode(currentNode.left, e);
        }else{
            return this.existNode(currentNode.right, e);
        }
    }
}

BST.prototype.search = function(e){
    return this.searchnode(this.root, e);
}
