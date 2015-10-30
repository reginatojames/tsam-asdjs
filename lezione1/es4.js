//ITERATIVO
/*function sumcomp(a,b){
    var somma=0;
    if(a>b){
        for(a; a<=b; a++){
            somma=somma+a;
        }
    }else{
        for(b; b<=a; b++){
            somma=somma+b;
        }
    }
    return somma;
}
var a = 2;
var b = 4;
console.log(sumcomp(a,b));*/
//RICORSIVO
/*function sumcomp(a, b){
	return b < a ? rSumcomp(a, b, 0) : rSumcomp(b, a, 0);
}*/

function sumcomp(b, i, sum){
	sum = sum + i;
	if (i == b){
	    return sum;
	} 
	return sumcomp(b, i + 1, sum);
}
var a = 5;
var b = 3;
var sum = 0;
if(b<a){
    console.log(sumcomp(a,b,sum));
}else{
    console.log(sumcomp(b,a,sum));
}
