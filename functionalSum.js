function functionalSum(a) {
    let sum = 0;
    sum += a;

    function calc(b) {
        sum += b;
        return calc;
    }
    calc.toString = () => sum;
    return calc;

}

console.log(functionalSum(1));
console.log(functionalSum(1)(6)(-3));