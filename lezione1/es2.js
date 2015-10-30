//ITERATIVO

function ritorna(n){
    var sum=0;
    var j = 0;
    var i = 1;
    while(j<n){
        if(i%2!=0){
            sum=sum+n;
            j++;
        }
        i++;
    }
    return sum;
}
n=5;
console.log(ritorna(n));
//RICORSIVO
/*var a=5;
var n=1;
var sum=0;
var i=0;
function ritorna(sum){
    if(i==a){
        return ritorna(sum);
    }else{
        sum+=n;
        n=n+2;
        i++;
        return sum;
    }
}
console.log(ritorna(sum));*/