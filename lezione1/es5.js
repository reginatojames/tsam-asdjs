/*function molt(a,b){
    var somma=0;
    if(a==0 || b==0){
        return somma;
    }
    for(var i=0; i<b; i++){
        somma = somma + a;
    }
    return somma;
}
var a=3;
var b=10;
console.log(molt(a,b));*/
//RICORSIVO
function molt(a, b, i, sum){
	if (i == b){
	    return sum;
	} 
	return molt(a, b, i + 1, sum + a);
}
var a = 3;
var b = 5;
var sum = 0;
var i = 0;
console.log(molt(a,b,i,sum));