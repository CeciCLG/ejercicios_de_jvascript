const numbersList = [];

function sum(a, b) {
    let sumResult = a + b;
    return sumResult
}

function substract(a, b) {
    let substractResult = a - b;
    return substractResult
}

function father(a, b, callBack) {
    numbersList.push(callBack(a, b));
}

father(3, 4, sum);
father(3, 8, substract);
father(2, 10, sum);
father(7, 8, substract);

console.log(numbersList);