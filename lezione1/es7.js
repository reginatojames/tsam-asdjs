function mult(a,b){
    var per=0;
    for(i=0;i<b;i++){
        per+=a;
    }
    return per;
}

function pow(x,y){
    var i=0;
    var c=x;
    while(i!=y-1){
        c=mult(c,x);
        i++;
    }
    return c;
}
console.log(pow(4,2));