//ITERATIVO
/*function somma(a){
    var i = 0;
    var sum = 0;
    while(a[i]>=0){
        sum = sum + a[i];
        i++;
    }
    return sum;
}

var a = new Array(1,1,1,-1,1,1,1,1,1,1);
console.log(somma(a));*/

//RICORSIVO

function sum(a){
    if(a[0]<0 || a.length==0){
        return somma;
    }else{
        return a[0]+sum(a.slice(1));
    }
}
var somma=0;
var i=0;
var a = new Array(1,1,1,-1,1,1,1,1,1,1);
var b = sum(a);
console.log(b);