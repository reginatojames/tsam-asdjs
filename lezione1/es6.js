function div(a,b){
    
    if(a==0 || b==0){
        return 0;
    }
    var i = 0;
    while((a-b)<=0){
        sottr = sottr - a;
        i++;
    }
    var sottr=new Array(i,a);
    return sottr;
}
var a=9;
var b=3;
console.log(div(a,b));