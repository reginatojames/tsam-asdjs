/////////////////////////////////////////CREA ARRAY
function riempi(a,b){
    var array = new Array();
    for(var i=0; i<b; i++){
        array[i]=a;
    }
    return array;
}
/////////////////////////////////////////
function ex_1_F(array){
  var tot=0;
  array.every(x=>{
    if(x>0){
      tot+=x;
    }
    return x>0;
  });
  return tot;
}
/*
function ex_1_F(array){
  var tot=0;
  var tmarray=[];
  array.every(x=>{
    if(x>0){
      tmarray.push(x);
    }
    return x>0;
  });
  return tmarray.reduce((acc,x)=>acc+x);
}TRICKY*/
function ex_2_F(n){
  var array = [];
  var tot=0;
  for(var i=1; i<=n; i++){
    array[i] = 2*i-1; 
  }
  array.every(x=>{
    if(x>0){
      tot+=x;
    }
    return x>0;
  });
  return tot;
}
//////////////////////////////////////////////////
function media(array){
    var tot=0;
    array.every(x=>tot+=x);
  return tot;
}
function ex_3_F(array){
  return media(array)/array.length;
}
///////////////////////////////////////////////////
function inter(a,b){
  var array = [];
  var tot=0;
  var i = 0;
  for(var a; a<=b; a++){
     array[i]=a;
     i++;
  }
  array.every(x=>{
    if(x>0){
      tot+=x;
    }
    return x>0;
  });
  return tot;
}
function ex_4_F(a,b){
  if(a<b) return inter(a,b);
  if(a>b) return inter(b,a);
}
///////////////////////////////////////////////////
function ex_5_F(a,b){
  var array = [];
  var tot=0;
  for(var i=0; i<b; i++){
    array[i] = a; 
  }
  array.every(x=>{
    if(x>0){
      tot+=x;
    }
    return x>0;
  });
  return tot;
}
///////////////////////////////////////////////////
/*function ex_7_F(a,b){
  var tot=0;
  array.every(x=>{
    if(x<=0){
      tot+=x;
    }
    return x>0;
  });
  return tot;
}*/
//////////////////////////////////////////////////
function ex_8_F(array){
  var x = Math.sqrt(array.length);
  var arr = [];
  var acc = [];
  array.every(i=>{
    arr.push(i);
    if(arr.length==x){
      acc.push(arr);
      arr = [];
    }
      return true;
  });
  return acc;
}
/////////////////////////////////////////////////
function ex_9_F(array){
  var arr = [];
  array.every(i=>{
    arr.unshift(i);
    return true;
  });
  return arr;
}
////////////////////////////////////////////////
function ex_11_F(array){
  var even = [];
  var odd = [];
  array.every(i=>{
    if(i%2==0){
      even.push(i);
    }else{
      odd.push(i);
    }
    return true;
  });
  var final = odd.concat(even);
  return final;
}
