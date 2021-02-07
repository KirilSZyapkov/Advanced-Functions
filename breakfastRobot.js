function breakfastRobot() {
    let print = '';
    const ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }
    return action
    function action(input) {
        let [command, param, num] = input.split(' ');
        if (command === 'restock') {
            restock(param, num);
        } else if (command === 'prepare') {
            prepare(param, num);
        } else if (command === 'report') {
            report();
        }
        return print;
    }
    function restock(arg1, arg2) {
        let microelement = arg1;
        let quantity = Number(arg2);
        ingredients[microelement] += quantity;
        print = 'Success'
        return print;
    }
    function prepare(arg1, arg2) {
        let recipe = arg1;
        let quantity = Number(arg2);
        if (recipe === 'apple') {
            let itemOne = ingredients.carbohydrate;
            let itemTwo = ingredients.flavour;
            if (quantity * 1 <= itemOne && quantity * 2 <= itemTwo) {
                ingredients.carbohydrate -= quantity * 1;
                ingredients.flavour -= quantity * 2;
                print = 'Success'
                return print;
            } else {
                if (quantity * 1 > itemOne) {
                    print = `Error: not enough carbohydrate in stock`;
                    return print;
                } else if (quantity * 2 > itemTwo) {
                    print = `Error: not enough flavour in stock`;
                    return print;
                }
            }
        } else if (recipe === 'lemonade') {
            let itemOne = ingredients.carbohydrate;
            let itemTwo = ingredients.flavour;
            if (quantity * 10 <= itemOne && quantity * 20 <= itemTwo) {
                ingredients.carbohydrate -= quantity * 10;
                ingredients.flavour -= quantity * 20;
                print = 'Success'
                return print;
            } else {
                if (quantity * 10 > itemOne) {
                    print = `Error: not enough carbohydrate in stock`;
                    return print;
                } else if (quantity * 20 > itemTwo) {
                    print = `Error: not enough flavour in stock`;
                    return print;
                }
            }
        } else if (recipe === 'burger') {
            let itemOne = ingredients.carbohydrate;
            let itemTwo = ingredients.fat;
            let itemThree = ingredients.flavour;
            if (quantity * 5 <= itemOne && quantity * 7 <= itemTwo && quantity * 3 <= itemThree) {
                ingredients.carbohydrate -= quantity * 5;
                ingredients.fat -= quantity * 7;
                ingredients.flavour -= quantity * 3;
                print = 'Success'
                return print;
            } else {
                if (quantity * 5 > itemOne) {
                    print = `Error: not enough carbohydrate in stock`;
                    return print;
                } else if (quantity * 7 > itemTwo) {
                    print = `Error: not enough fat in stock`;
                    return print;
                } else if (quantity * 3 > itemThree) {
                    print = `Error: not enough flavour in stock`;
                    return print;
                }
            }
        } else if (recipe === 'eggs') {
            let itemOne = ingredients.protein;
            let itemTwo = ingredients.fat;
            let itemThree = ingredients.flavour;
            if (quantity * 5 <= itemOne && quantity * 1 <= itemTwo && quantity * 1 <= itemThree) {
                ingredients.protein -= quantity * 5;
                ingredients.fat -= quantity * 1;
                ingredients.flavour -= quantity * 1;
                print = 'Success'
                return print;
            } else {
                if (quantity * 5 > itemOne) {
                    print = `Error: not enough protein in stock`;
                    return print;
                } else if (quantity * 1 > itemTwo) {
                    print = `Error: not enough fat in stock`;
                    return print;
                } else if (quantity * 1 > itemThree) {
                    print = `Error: not enough flavour in stock`;
                    return print;
                }
            }
        } else if (recipe === 'turkey') {
            let itemOne = ingredients.protein;
            let itemTwo = ingredients.carbohydrate;
            let itemThree = ingredients.fat;
            let itemFour = ingredients.flavour;
            if (quantity * 10 <= itemOne && quantity * 10 <= itemTwo && quantity * 10 <= itemThree && quantity * 10 <= itemFour) {
                ingredients.protein -= quantity * 10;
                ingredients.carbohydrate -= quantity * 10;
                ingredients.fat -= quantity * 10;
                ingredients.flavour -= quantity * 10;
                print = 'Success'
                return print;
            } else {
                if (quantity * 10 > itemOne) {
                    print = `Error: not enough protein in stock`;
                    return print;
                } else if (quantity * 10 > itemTwo) {
                    print = `Error: not enough carbohydrate in stock`;
                    return print;
                } else if (quantity * 10 > itemThree) {
                    print = `Error: not enough fat in stock`;
                    return print;
                } else if (quantity * 10 > itemFour) {
                    print = `Error: not enough flavour in stock`;
                    return print;
                }
            }
        }
    }
    function report() {
        let lineToPrint = [];
        for (let key in ingredients) {
            lineToPrint.push(`${key}=${ingredients[key]}`);
        }
        print = lineToPrint.join(' ');
        return print;
    }
}

let manager = breakfastRobot();
console.log(manager("restock protein 100"));
console.log(manager("restock carbohydrate 100"));
console.log(manager("restock fat 100"));
console.log(manager("restock flavour 100"));
console.log(manager("report"));
console.log(manager("prepare eggs 2"));
console.log(manager("report"));
console.log(manager("prepare eggs 1"));
console.log(manager("report"));






// var expectationPairs = [
//     ['restock protein 100', 'Success'],
//     ['restock carbohydrate 100', 'Success'],
//     ['restock fat 100', 'Success'],
//     ['restock flavour 100', 'Success'],
//     ['report', 'protein=100 carbohydrate=100 fat=100 flavour=100'],
//     ['prepare eggs 2', 'Success'],
//     ['report', 'protein=90 carbohydrate=100 fat=98 flavour=98'],
//     ['prepare eggs 1', 'Success'],
//     ['report', 'protein=85 carbohydrate=100 fat=97 flavour=97']
// ];