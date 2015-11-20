
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

function ex_1_P(a) {
    return a.sum();
}

//////////////////////////////////////////////////////////////////////////////////////////////////fine uno
Array.prototype.media = function(){
    if(this.length == 0){
        return 0;
    }else{
        return this.reduce((acc,x) => acc + x, 0) / this.length;
    }
}

function ex_3_P(a){
    return a.media();   
}
////////////////////////////////////////////////////////////////////////////////////////////////////fine tre
var array = [3,5,6,1,2,7,8,9,0]; 

Array.prototype.bidimensionaleR = function () {

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

function ex_8_P(a) {
    return a.bidimensionaleR();
}

///////////////////////////////////////////////////////////////////////////////////fine 8
Array.prototype.invert = function() {
    var result = [];
    
    this.forEach(x => {
        result.unshift(x);
    });

    return result;
}

function ex_9_P(a) {
    return a.invert();
}

/////////////////////////////////////////////////////////////////////////////////fine 9
Array.prototype.sort = function () {
    return this.filter(x => x%2!=0).concat(this.filter(x => x%2==0));
}

function ex_11_P(a) {
    return a.sort();
}