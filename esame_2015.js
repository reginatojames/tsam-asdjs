function initialArray() {
    var seed = 1;
    function random() {
        var x = Math.sin(seed++) * 10000;
        return Math.floor(x);
    }
    
    var a = [];
    for (var i = 0; i < 10000; ++i) {
        a.push(random());
    }
    return a;
}

var a = initialArray();




/*
 *ESERCIZIO 1 (RICORSIVO)
 */
function ex1_R(a) {
    if (a.length == 0) {
        return 0;
    } else {
        if (a[0] == 5070) {
            return 1 + ex1_R(a.slice(1));
        } else {
            return 0 + ex1_R(a.slice(1));
        }
    }
}


/*
 *ESERCIZIO 2 (FUNZIONALE)
 */
function ex2_F(a) {
    return Math.sqrt(a.filter(x=> x%2 ==0 && x >= 0)
    .map(a=> a * a)
    .reduce((somma, x)=> somma + x, 0));
}


/*
 *ESERCIZIO 4 (TREE)
 */
function Node(value, leftNode, rightNode) {
    this.item = value;
    this.left = leftNode;
    this.right = rightNode;
}

function BST() {
    this.root = null ;
}

BST.prototype.addNode = function(currentNode, e) {
    if (e < currentNode.item) {
        if (currentNode.left == null ) {
            currentNode.left = new Node(e,null ,null );
        } else {
            this.addNode(currentNode.left, e);
        }
    } else {
        if (currentNode.right == null ) {
            currentNode.right = new Node(e,null ,null );
        } else {
            this.addNode(currentNode.right, e);
        }
    }
}

BST.prototype.add = function(e) {
    if (this.root == null ) {
        this.root = new Node(e,null ,null );
    } else {
        this.addNode(this.root, e);
    }
}

BST.prototype.getNodeMax = function() {
    return this.getNodeMaxVal(this.root);
}
/*
 *  METODO PER TROVARE IL VALORE MASSIMO
 */
BST.prototype.getNodeMaxVal = function(currentNode) {
    if (currentNode.right == null ) {
        return currentNode.item;
    } else {
        return this.getNodeMaxVal(currentNode.right);
    }
}

function ex4(a) {
    
    var tree = new BST();
    
    for (var i = 0; i < a.length; i++) {
        tree.add(a[i]);
    }
    
    return tree.getNodeMax();
}


/*
 *ESERCIZIO 3 (STACK)
 */

var _0xd10d = ["\x28\x20\x28\x20\x28\x20\x28\x20\x28\x20\x33\x33\x32\x31\x33\x20\x2A\x20\x32\x33\x33\x20\x29\x20\x2B\x20\x39\x39\x32\x31\x20\x29\x20\x2D\x20\x28\x20\x37\x33\x32\x31\x34\x31\x38\x20\x2B\x20\x33\x33\x32\x31\x32\x32\x20\x29\x20\x29\x20\x2D\x20\x31\x34\x31\x33\x32\x34\x32\x20\x29\x20\x2A\x20\x28\x20\x32\x34\x31\x34\x31\x30\x20\x2D\x20\x32\x34\x31\x34\x31\x39\x20\x29\x20\x29"];

function evaluateExpr(callback) {
    return callback(_0xd10d[0]);
}

function Stack() {
    var items = [];
    this.push = function(elemento){
        items.push(elemento);
    };
    this.pop = function(){
        return items.pop();
    };
    this.peek = function(){
        return items[items.length-1];
    };
    this.isEmpty = function(){
        return items.length == 0;
    };
}

function calculator(str){
    var v = new Stack();
    var s = new Stack();
    var myarray = str.split(" ");
    
    for(var i = 0; i < myarray.length; i++){
        switch(myarray[i]){
            case '+':
                s.push('+');
                break;  
            case '-':
                s.push('-');
                break;  
            case '*':
                s.push('*');
                break;   
            case '/':
                s.push('/');
                break;          
            case '(':
                s.push('(');
                break;
            case ')':
                var n1 = parseInt(v.pop());
                var n2 = parseInt(v.pop());
                var operatore = s.pop();
                s.pop();
                switch(operatore){
                    case '+':
                        v.push(n1 + n2);
                        break;
                    case '-':
                        v.push(n2 - n1);
                        break;
                    case '*':
                        v.push(n2 * n1);
                        break;
                    case '/':
                        v.push(n2 / n1);
                        break;
                }
                break;
            default:
                v.push(myarray[i]);
                break;
        }
    }
    return v.pop();
}