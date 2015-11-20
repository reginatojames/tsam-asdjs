function Stack(){
    this.myarray = [];
}


Stack.prototype.push = function (e){this.myarray.push(e);}
Stack.prototype.pop = function (){return this.myarray.pop();}
Stack.prototype.peek = function (){return this.myarray[this.myarray.length -1];}
Stack.prototype.isEmpty = function (){return this.myarray.length == 0;}
Stack.prototype.popall = function (callback) {
    while (!this.isEmpty()){        
        callback(this.pop());
    }
}

function rpn(str){
   var res = new Stack();
   var array = str.split(" ");
   var a = 0;
   var b = 0;
   var result = 0;
   for(var i = 0; i < array.length; i++){
       switch(array[i]){
           case "+":
                a = res.pop();
                b = res.pop();
                result = b + a;
                res.push(result);
                break;
           case "-":
                a = res.pop();
                b = res.pop();
                result = b - a;
                res.push(result);
                break;
           case "*":
                a = res.pop();
                b = res.pop();
                result = b * a;
                res.push(result);
                break;
           case "/":
                a = res.pop();
                b = res.pop();
                result = b / a;
                res.push(result);
                break;
           default:
                res.push(parseInt(array[i]));                
       }
   }
   return res;
}
