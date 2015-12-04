function initialArray() {
    var seed = 1;
    function random() {
        var x = Math.sin(seed++) * 10000;
        return Math.floor(x);
    }
    
    var a = [];
    for (var i = 0; i < 10000; ++i) {
        a.push(random());
    }
    return a;
}
///////////////////////////////////////////////////////////////////////////////////////TESTERRRRRRRRRRRRRRRRRR
function test() {
    var arr = initialArray();
    return ex_2(arr);
}
///////////////////////////////////////////////////////////////////////////////////////
function ex_1(myarray) {
    if (myarray.length == 0) {
        return 0;
    } else {
        if (myarray[0] == 5070) {
            return 1 + ex_1(myarray.slice(1));
        } else {
            return 0 + ex_1(myarray.slice(1));
        }
    }
}
////////////////////////////////////////////////////////////////////////////
function ex_2(a) {
    return Math.sqrt(a.filter(x=>x%2==0&&x>=0)
    .map(a=>a*a)
    .reduce((somma, x)=>somma+x, 0));
}
//////////////////////////////////////////////////////////////////////////
function calcola(espressione) 
{
    espressione = espressione.split(" ");
    return calcola1(espressione);
}
function calcola1(e) 
{
    var num = [];
    var op = [];
    while (e.length > 0) 
    {
        
        tmp = e[0];
        switch (tmp) 
        {
        case '+':
            op.push(tmp);
            break;
        
        case '-':
            op.push(tmp);
            break;
        
        case '*':
            op.push(tmp);
            break;
        
        case '/':
            op.push(tmp);
            break;
        
        case ')':
            num2 = num.pop();
            num1 = num.pop();
            oper = op.pop();
            num.push(eval(num1 + oper + num2));
            break;
        case '(':
            break;
        
        default:
            num.push(tmp);
            break;
        
        }
        e = e.slice(1);
    
    }
    return num.pop();
}
//////////////////////////////////////////////////////////////////////////////////////