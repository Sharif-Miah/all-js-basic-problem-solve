//  problem 1:

function returnTaka() {
    const totalTaka = 1000;
    const mangoPrice = 300;
    const orangePrice = 400;

    const totalCost = mangoPrice + orangePrice;
    const returnMoney = totalTaka - totalCost;
    return returnMoney;

}

const money = returnTaka();
console.log(money);


// problem 2: 

function allSubjectAverage() {
    const bangla = 80;
    const mathematics = 88;
    const biology = 75;
    const chemistry = 82;
    const physics = 85;

    const allSubjectSum = bangla + mathematics + biology + chemistry + physics;
    const totalSubject = 5;
    const average = allSubjectSum / totalSubject;
    return average
}

const result = allSubjectAverage();
console.log(result);

// problem 3:

function toStringAdd(firstStr, secondStr) {
    const addString = firstStr + secondStr;
    return addString;
}

const string1 = 'I am going to be ';
const string2 = 'an awesome web developer.'
const sumString = toStringAdd(string1, string2);
console.log(sumString);

// problem 4: 

function devided() {
    const sharasMotherGives = 119;
    const devidedNumber = 5;
    const devidedResult = sharasMotherGives / devidedNumber;
    return devidedResult;
}

const number = devided();
console.log(number);
