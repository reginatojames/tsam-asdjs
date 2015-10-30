function scambia(a){
    var disp = new Array();
    var pari = new Array();
    var j = 0;
    var k = 0;
    for(var i=0; i<a.length; i++){
        if(a[i]%2!=0){
            disp[j]=a[i];
            j++;
        }else{
            pari[k]=a[i];
            k++;
        }
    }
    var final = disp.concat(pari);
    return final;
}
var a = new Array(2,5,1,8);
console.log(scambia(a));