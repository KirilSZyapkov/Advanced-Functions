function fibonacci(){
    let numOne = 0;
    let numTwo = 1;

    return function increase(){
        let result = numOne + numTwo;
        numOne = numTwo;
        numTwo = result;
        return numOne;
    }

}

let fib = fibonacci();
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 