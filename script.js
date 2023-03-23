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

const birthYear = 1991;

let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century)