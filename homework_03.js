
Array.prototype.sum = function () {
    function buildUntil(a, check) {
        var tmparray = [];
        a.every(x => {
            if (check(x)) {
                tmparray.push(x);
                return true;
            } else {
                return false;
            }
        });
        return tmparray;
    }

    return buildUntil(this, x => x > 0).reduce((acc, x) => acc + x, 0);
}

//////////////////////////////////////////////////////////////////////////////////////////////////fine uno
Array.prototype.robe = function(){
    if(this.length == 0){
        return 0;
    }else{
        return this.reduce((acc,x) => acc + x, 0) / this.length;
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////fine tre
var array = [3,5,6,1,2,7,8,9,0]; 

Array.prototype.matr= function () {

    function magic(myarray, matrix) {
        matrix.unshift(myarray);
        return matrix;
    }  

    function bidimensionaleRInternal(myarray, n) {
        if (myarray.length == n) {
            return [myarray];
        } else {
            return magic(myarray.slice(0, n),
                         bidimensionaleRInternal(myarray.slice(n), n));
        }
    }

    return bidimensionaleRInternal(this, Math.sqrt(this.length));
}

///////////////////////////////////////////////////////////////////////////////////fine 8
Array.prototype.rior = function() {
    var result = [];
    
    this.forEach(x => {
        result.unshift(x);
    });

    return result;
}

/////////////////////////////////////////////////////////////////////////////////fine 9
Array.prototype.r = function () {
    return this.filter(x => x%2!=0).concat(this.filter(x => x%2==0));
}

function ex_1(arr){
    return arr.sum();
}

function ex_3(arr){
    return arr.robe();
}

function ex_8(arr){
    return arr.matr();
}

function ex_9(arr){
    return arr.rior();
}

function ex_11(arr){
    return arr.r();
}