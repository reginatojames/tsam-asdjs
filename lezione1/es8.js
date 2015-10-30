function scanna(a){
    for(var i=0; i<5; i++){
        a[i]=new Array(i);
         for(var j=0; j<5; j++){    
            a[j]=new Array(j);
        }
    }
    return a;
}
var a = new Array(25);
console.log(scanna(a));