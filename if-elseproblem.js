
// problem 7:

function resultGrade() {
    const myNumer = 63;
    const tomNumber = 66;
    const janesNumbr = 95;
    const peterNumber = 56;
    const johnNumber = 40;

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

const myGrade = resultGrade();


// problem 8: 


function largesdNumber(num1, num2, num3) {
    if (num1 > num2) {
        if (num1 > num3) {
            console.log(num1, ' is large number.');
        } else {
            console.log(num3, ' is large number.');
        }
    } else {
        if (num3 > num2) {
            console.log(num3, ' is large number');
        } else {
            console.log(num2, ' is large number.');
        }
    }
}

const firstNumber = 130;
const secontNumber = 79;
const thirdNumber = 450;

largesdNumber(firstNumber, secontNumber, thirdNumber)

