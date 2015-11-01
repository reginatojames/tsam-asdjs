function sommaI(a){
    var i = 0;
    var sum = 0;
    while(a[i]>=0 || a.length>0){
        sum = sum + a[i];
        i++;
    }
    return sum;
}
//////////////////////////////////////////////////////
function sommaR(a){
    if(a[0]<0 || a.length==0){
        return 0;
    }else{
        return a[0]+sommaR(a.slice(1));
    }
}
////////////////////////////////////////////////////////fine uno
function sommadisp(n){
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
///////////////////////////////////////
function sommadispR(n, i, current, sum){
	if (i > n) return sum;
	return sommadisp(n, i + 1, current + 2, sum + current);
}
/////////////////////////////////////////////////////////////fine due
function media(a){
    var somma=0;
    for(var i=0; i<10; i++){
        somma=somma+a[i];
    }
    var media=somma/a.length;
    return media;
}
/////////////////////////////////////////////////////////////////
function mediaR(a,somma){
    if(a.length==0){
        return somma;
    }else{
        return a[0]+mediaR(a.slice(1));
    }
}
///////////////////////////////////////////////////////////////////fine tre
function sumcompI(a,b){
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
////////////////////////////////////////////////////////////////
function sumcompR(b, i, sum){
	sum = sum + i;
	if (i == b){
	    return sum;
	} 
	return sumcomp(b, i + 1, sum);
}
//////////////////////////////////////////////////////////////////////fine quattro
function molt(a,b){
    var somma=0;
    if(a==0 || b==0){
        return somma;
    }
    for(var i=0; i<b; i++){
        somma = somma + a;
    }
    return somma;
}
//////////////////////////////////////////////////////////////////////
function moltR(a, b, i, sum){
	if (i == b){
	    return sum;
	} 
	return molt(a, b, i + 1, sum + a);
}
////////////////////////////////////////////////////////////////////////fine cinque
function divI(a,b){
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
//////////////////////////////////////////////////////////////////////////
function rDiv(b, times, sub){
	if (sub < b) return times + " resto " + sub;
	return rDiv(b, times + 1, sub - b);
}
////////////////////////////////////////////////////////////////////fine sei
function pow(x,y){
    var i=0;
    var c=x;
    while(i!=y-1){
        c=mult(a,b);
        i++;
    }
    return c;
}
///////////////////////////////////////////////////////////////////
function rrpow(a, b){
	return b == 0 ? 1 : rPow(a, b, 1, a);
}

function rPow(a, b, times, mul){
	if (times == b) return mul;
	mul = mult(mul, a);
	return rPow(a, b, times + 1, mul);
}
////////////////////////////////////////////////////////////////////////fine sette
function scanna(a){
    for(var i=0; i<5; i++){
        a[i]=new Array(i);
         for(var j=0; j<5; j++){    
            a[j]=new Array(j);
        }
    }
    return a;
}
///////////////////////////////////////////////////////////////////////fine otto
function invert(a){
    a.reverse();
    return a;
}
//////////////////////////////////////////////////////////////////////////
function rreverse(array){
	return rReverse(array, 0, []);
}

function rReverse(array, index, newArray){
	if (index == array.length) return newArray;
	newArray[index] = array[array.length - 1 - index];
	return rReverse(array, index + 1, newArray);
}
/////////////////////////////////////////////////////////////////////////////fine nove
function riempi(a,b){
    var array = new Array();
    for(var i=0; i<b; i++){
        array[i]=a;
    }
    return array;
}
///////////////////////////////////////////////////////////////////////
function riempiR(a, n){
	return rReplicate(a, n, [], 0);
}

function rReplicate(a, n, array, index){
	if (index == n) return array;
	array[index] = a;
	return rReplicate(a, n, array, index + 1);
}
////////////////////////////////////////////////////////////////////////fine dieci
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
///////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////PER TIZ
function ex_1_I(a){
    return sommaI(a);
}
function ex_1_R(a){
    return sommaR(a);
}
function ex_2_I(a){
    return sommadisp(a);
}
function ex_2_R(a){
    return sommadispR(a,1,1,0);
}
function ex_3_I(a){
    return media(a);
}
function ex_3_R(a){
    return (mediaR(a,0)/a.length);
}
function ex_4_I(a,b){
    return sumcompI(a,b);
}
function ex_4_R(a,b){
    if(b<a){
    return sumcompR(a,b,0);
    }else{
     return sumcompR(b,a,0);
    }
}
function ex_5_I(a,b){
    return molt(a,b);
}
function ex_5_R(a,b){
    return moltR(a,b,0,0);
}
function ex_6_I(a,b){
    return divI(a,b);
}
function ex_6_R(a,b){
    return rDiv(b,0,a);
}
function ex_7_I(a,b){
    return pow(a,b);
}
function ex_7_R(a,b){
    return rrpow(a,b);
}
function ex_8_I(a){
    return scanna(a)+ "sbagliato";
}
function ex_8_R(a){
    return console.log("non fatto");
}
function ex_9_I(a){
    return invert(a);
}
function ex_9_R(a){
    return rreverse(a);
}
function ex_10_I(a,b){
    return riempi(a,b);
}
function ex_10_R(a,b){
    return riempiR(a,b);
}
function ex_11_I(a){
    return scambia(a);
}
function ex_11_R(a){
    return console.log("non fatto");
}