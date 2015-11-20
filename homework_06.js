function Queue(n){
    this.array = new Array(n);
    this.length = this.array.length;
}

Queue.prototype.enqueue = function(el){
    if(this.lastInsert + 1 == this.array.length){
        this.lastInsert = 0;
    }
    else this.lastInsert++;
    this.array[this.lastInsert] = el;
}
Queue.prototype.dequeue = function(){
    if(this.lastDelete + 1 == this.array.length){
        this.lastDelete = 0;
    }
    else this.lastDelete++;
    var temp = this.array[this.lastDelete];
    this.array[this.lastDelete] = undefined;
    return temp;
}
Queue.prototype.front = function(){
    return this.array[lastInsert];
}
Queue.prototype.isEmpty = function(){
    return this.array.length == 0;   
}

function f(n){
    var a = new Queue(n);
    return a.length;
}