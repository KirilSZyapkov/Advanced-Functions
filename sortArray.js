function sortArray(input, arg) {
    let arr = input;
    let command = arg;

    function sortArr(arrA, command) {
        if (command === 'asc') {
            arr = arrA.sort((a, b) => a - b);
            return arr;
        } else if (command === 'desc') {
            arr = arrA.sort((a, b) => b - a);
            return arr;
        }
    }
    return sortArr(arr, command);
}

console.log(sortArray([14, 7, 17, 6, 8], 'desc'));