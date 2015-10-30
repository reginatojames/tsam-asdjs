function riempi(a,b){
    var array = new Array();
    for(var i=0; i<b; i++){
        array[i]=a;
    }
    return array;
}
var a = 2;
var b = 10;
console.log(riempi(a,b));