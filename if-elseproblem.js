
// problem 7:

function resultGrade(number) {
    const myNumer = number;

    if (myNumer >= 80) {
        console.log('I get A Grade.');
    } else if (myNumer >= 60) {
        console.log('I get B Grade.');
    } else if (myNumer >= 50) {
        console.log('I get C Grade.');
    } else if (myNumer >= 40) {
        console.log('I get D Grade.');
    } else {
        console.log('I am feltue Person.');
    }

}

const myGrade = resultGrade(60);


// problem 8: 


function largesdNumber(num1, num2, num3) {
    if (num1 > num2) {
        if (num1 > num3) {
            console.log(num1, ' is a large number.');
        } else {
            console.log(num3, ' is a large number.');
        }
    } else {
        if (num2 > num3) {
            console.log(num2, ' is large number.');
        } else {
            console.log(num3, ' is large number');
        }
    }
}

const firstNumber = 13;
const secontNumber = 79;
const thirdNumber = 45;

largesdNumber(firstNumber, secontNumber, thirdNumber)


// problem 9: 

function triangleSide(side1, side2, side3) {

    if (side1 === side2) {
        if (side1 === side3) {
            console.log(side1, ' and ', side3, ' is Isosceles');
        } else {
            console.log(side1, ' and ', side2, ' is  Isosceles');
        }
    } else {
        if (side2 === side3) {
            console.log(side2, ' and ', side3, ' is  Isosceles');
        } else {
            console.log(side3, ' and ', side1, ' is  Isosceles');
        }
    }

}

const sideFirst = 9;
const sideSecond = 8;
const sideThird = 9;

triangleSide(sideFirst, sideSecond, sideThird)


// problem 10: 

function frien1(num) {
    const aliya = num;

    if (aliya >= 90) {
        console.log('Aliya is get A+');
    } else if (aliya >= 80) {
        console.log('Aliya is get A');
    } else if (aliya >= 70) {
        console.log('Aliya is get B');
    } else if (aliya >= 60) {
        console.log('Aliya is get C');
    } else if (aliya >= 50) {
        console.log('Aliya is get D');
    } else {
        console.log('Aliya is Feltus girls.');
    }
}

frien1(80);


// problem 11:


function signal(alart) {
    const disition = alart;

    if (disition === 'red') {
        console.log('Do not crose the road because it is Danger zoon.');
    } else if (disition === 'yellow') {
        console.log('stand up side the road because it is not right time for crose the road.');
    } else {
        console.log('Now you crose the road beacue it is safe time for go.');
    }

}
const color = 'green';
signal(color);


// problem 16:

function buyElectricsGoods(money) {
    const buyGoods = money;

    if (buyGoods >= 80000) {
        console.log('I will buy MAC Computer.');
    } else if (buyGoods >= 60000) {
        console.log('I will buy Gamming Laptop.');
    } else if (buyGoods >= 40000) {
        console.log('I will buy Lenove yoga Computer.');
    } else if (buyGoods >= 20000) {
        console.log('I will buy second hand Laptop.');
    } else {
        console.log('I will buy a mobile and I will work that phone.');
    }
}

const price = 66000;
buyElectricsGoods(price)