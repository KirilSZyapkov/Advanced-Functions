function listProcessor(input) {
    let toPrint = [];

    for (let i of input) {
        let [command, arg] = i.split(' ');

        if (command === 'add') {
            add(arg);
        } else if (command === 'remove') {
            remove(arg);
        } else if (command === 'print'){
            print();
        }

    }

    function add(arg1) {
        return toPrint.push(arg1);
    }
    function remove(arg2) {
        if (toPrint.includes(arg2)) {
            while (toPrint.includes(arg2)) {
                let index = toPrint.indexOf(arg2);
                toPrint.splice(index, 1);
            }
            return toPrint;
        }
    }

    function print() {
        console.log(toPrint.join(','));
    }

}
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print'])