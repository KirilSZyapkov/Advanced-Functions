function commandProcessor() {

    let myStr = '';

    return {
        append,
        removeStart,
        removeEnd,
        print,
    }

    function append(arg) {
        myStr += arg;
        return myStr;
    }
    function removeStart(n) {
        myStr = myStr.slice(n);
        return myStr;
    }
    function removeEnd(m) {
        myStr = myStr.slice(0, -m);
        return myStr;
    }
    function print() {
        console.log(myStr);
    }

}

let secondZeroTest = commandProcessor();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();