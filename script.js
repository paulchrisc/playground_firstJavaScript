/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName)



let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);


let year;
console.log(year);
console.log(typeof year);

year = 1991
console.log(typeof year);

console.log(typeof null);

*/

//reassigning / mutated the var

/*let age = 30
age = 31;

//always use const unless you are sure that the variable will change

const birthYear = 1991;
// birthYear = 1990;




var job = 'programmer';
job = 'teacher';
*/
/* const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// ** means an exponent

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

//Assignment Operators

let x = 10 + 5;
x += 10; //x = x + 10 = 25
x *= 4; // x = x*4 = 100
x++; // x = x + 1
x--; //x= x - 1
x--;
console.log(x);

// Comparison Operators

console.log(ageJonas > ageSarah); // >, <, >=, <==
console.log(ageSarah >= 18);

console.log(now - 1991 > now - 2018);
*/
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;

x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = ageJonas + ageSarah / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

// test data 1:

// const markHeight = 1.69;
// const johnHeight = 1.95;
// const markWeight = 78;
// const johnWeight = 92;

/*const markHeight = 1.88;
const johnHeight = 1.76;
const markWeight = 95;
const johnWeight = 85;


let markBMI = markWeight / (markHeight ** 2);
let johnBMI = johnWeight / (johnHeight ** 2);
let bmiComparison = markBMI > johnBMI;

console.log(markBMI);
console.log(johnBMI);
console.log(markBMI > johnBMI);

console.log(markBMI, johnBMI, bmiComparison);
*/

/*const firstName = 'Jonas'
const job = 'teacher'
const birthYear = 1991
const year = 2037

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String With \n\
multiple \n\
lines')

console.log(`String
multiple
lines`)
*/

/*
const age = 15;
// const isOldEnough = age >= 18;


if (age >= 18) {
    console.log('Sarah can start driving!');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah can not drive, wait another ${yearsLeft} years :`);
}
*/

/*const birthYear = 1991;

let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century)
*/

/*const markHeight = 1.88;
const johnHeight = 1.76;
const markWeight = 95;
const johnWeight = 85;


let markBMI = markWeight / (markHeight ** 2);
let johnBMI = johnWeight / (johnHeight ** 2);
const bmiComparison = markBMI > johnBMI;

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`)
} else {
    console.log(`John's (${johnBMI}) is higher than Mark's (${markBMI})`)
}
*/

/*
// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number(Jonas));
console.log(typeof NaN);


// type coercion

console.log('I am ' + 23 + 'years old');
console.log('23' - '10' - 3);
console.log('23' / '2');
*/

// 5 falsy values: 0, '', undefined, null, NaN
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(""));


const money = 0;
if (money) {
    console.log("Don't spend it all ;")
} else {
    console.log('You should get a job!')
}


let height = 0;
if (height) {
    console.log('Height is defined');
} else {
    console.log('Height is undefined');
}
*/

// const age = 18;
// if (age === 18) console.log("You are an adult!");

//== does type coercion , === strict
/*
const favourite = Number(prompt("What's your favorite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log("23 is a cool number")
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else {
    console.log('number is not 7 nor 23')
}
*/

// const hasDriverlicense = true;
// const hasGoodVision = true;

// console.log(hasDriverlicense && hasGoodVision);
// console.log(hasDriverlicense || hasGoodVision);
// console.log(!hasDriverlicense || hasGoodVision);

// const shouldDrive = hasDriverlicense && hasGoodVision
// // if (shouldDrive) {
// //     console.log('Sarah can drive!')
// // } else {
// //     console.log('Sarah should not drive!')
// // }

// const isTired = false;

// console.log(hasDriverlicense && hasGoodVision && isTired);

// if (hasDriverlicense && hasGoodVision && !isTired) {
//     console.log('Sarah can drive!')
// } else {
//     console.log('Sarah should not drive!')
// }

/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK
*/

/*test data 1
const dolphinScore1 = 96
const dolphinScore2 = 108
const dolphinScore3 = 89

const koalasScore1 = 88
const koalasScore2 = 91
const koalasScore3 = 110



const averageKoala = (koalasScore1 + koalasScore2 + koalasScore3) / 3

const averageDolphin = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3

const draw = averageDolphin === averageKoala
const drawNoWinner = draw < 100
const winningTeam = averageDolphin > averageKoala
console.log(winningTeam)

if (winningTeam == true && averageDolphin >= 100) {
    console.log('Dolphin wins the trophy!')
} else if (winningTeam == false && averageKoala >= 100) {
    console.log('Koalas wins the trophy!')
} else if (draw && averageDolphin >= 100 && averageKoala >= 100) {
    console.log('Both teams get the Trophy')
} else {
    console.log('No one Wins the Trophy')
}*/

// const day = 'thursday';

// switch (day) {
//     case 'monday':
//         console.log('Plan Course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare Theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write Code examples');
//         break;
//     case 'friday':
//         console.log('Record Videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend')
//         break;
//     default:
//         console.log('Not a valid day!');
// }


// const day = 'saturday'

// if (day === 'monday') {
//     console.log('Plan Course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//     console.log('Prepare Theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write Code examples');
// } else if (day === 'friday') {
//     console.log('Record Videos');
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend');
// } else {
//     console.log('Not a valid day!');
// }

// const age = 23;
// age >= 18 ? console.log('I like to drink wine') :
//     console.log('I like to drink water');

// const age = 15
// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// console.log(`I like to drink ${drink}`)
// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);


/* 
Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 
*/



const billValue = 30;
const tip = billValue <= 300 && billValue >= 50 ? billValue * .15 : billValue * .20;

console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value is ${billValue + tip}`);

console.log(tip)