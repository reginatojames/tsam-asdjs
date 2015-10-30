/*function media(a){
    var somma=0;
    for(var i=0; i<10; i++){
        somma=somma+a[i];
    }
    var media=somma/a.length;
    return media;
}
var a = new Array(1,1,1,1,1,1,1,1,1,1);
console.log(media(a));
*/
//RICORSIVO
function sum(a){
    if(a.length==0){
        return somma;
    }else{
        return a[0]+sum(a.slice(1));
    }
}
var somma=0;
var i=0;
var a = new Array(1,1,1,1,1,1,1,1,1,1);
var b = sum(a);
console.log(b/a.length);