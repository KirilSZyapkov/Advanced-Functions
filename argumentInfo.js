function argumentInfo(...input) {
    let str = 0;
    let num = 0;
    let fun = 0;
    let bool = 0;
    let nul = 0;
    let undef = 0;
    let nan = 0;
    let obj =0;
    let toPrint = {};

    for (let inp of input) {
        if (typeof (inp) === 'string') {
            str++;
            if (!toPrint.hasOwnProperty('string')) {
                toPrint['string'] = Number(str);
            } else {
                toPrint['string'] = Number(str);
            }
        } else if (typeof (inp) === 'number') {
            num++;
            if (!toPrint.hasOwnProperty('number')) {
                toPrint['number'] = Number(num);
            } else {
                toPrint['number'] = Number(num);
            }
        } else if (typeof (inp) === 'function') {
            fun++;
            if (!toPrint.hasOwnProperty('function')) {
                toPrint['function'] = Number(fun);
            } else {
                toPrint['function'] = Number(fun);
            }
        } else if (typeof (inp) === 'boolean') {
            bool++;
            if (!toPrint.hasOwnProperty('boolean')) {
                toPrint['boolean'] = Number(bool);
            } else {
                toPrint['boolean'] = Number(bool);
            }
        } else if (typeof (inp) === 'null') {
            nul++;
            if (!toPrint.hasOwnProperty('null')) {
                toPrint['null'] = Number(nul);
            } else {
                toPrint['null'] = Number(nul);
            }
        } else if (typeof (inp) === 'undefined') {
            undef++;
            if (!toPrint.hasOwnProperty('undefined')) {
                toPrint['undefined'] = Number(undef);
            } else {
                toPrint['undefined'] = Number(undef);
            }
        } else if (typeof (inp) === 'NaN') {
            nan++;
            if (!toPrint.hasOwnProperty('NaN')) {
                toPrint['NaN'] = Number(nan);
            } else {
                toPrint['NaN'] = Number(nan);
            }
        } else if (typeof (inp) === 'object'){
            obj++;
            if (!toPrint.hasOwnProperty('object')) {
                toPrint['object'] = Number(obj);
            } else {
                toPrint['object'] = Number(obj);
            }
        }
        console.log(`${typeof (inp)}: ${inp}`);
    }

    let sorted = Object.entries(toPrint);
    sorted.sort((a, b) => b[1] - a[1]);
    for(let line of sorted){
        console.log(`${line[0]} = ${line[1]}`);
    }
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });