//VARIABLES

let schoolName = 'Nile University'
const favFood = 'Fried rice'

console.log(schoolName)

//VARIABLE NAMING CONVENTION

// 1. camelCase
let schoolPopulation = 2000
// 2. PascalCase
let ViceChancellor = 'Mr Khalid'
// 3. Sentencecase
let Schoolmotor = 'Come one, come all'
// 4. under_score
let best_department = 'Software Engineering'
// 5. dollar$sign
let $richestkid = 'Khalid with Benz'
// 6. numbers
let no1boy = 'Ahmad'

// JAVASCRIPT OPERATORS

// a. ARITHMETIC OPERATOR
let addition = 2 + 2 //addition operator
let subtraction = 10 - 5 //subtraction operator
let multiplication = 10 * 2 //multiplication operator
let division = 10/2 //division operator
let modulus = 10 % 2 //modulus operator outputs the remainder, in this instance it is 0

// b. ASSIGNMENT OPERATOR
let assignment = 'Difference between javascript and java' //= is the assignment operator

//c. COMPARISON OPERATOR
let firstname = 'Khalid'
let age = 20

// if (firstname == 'Khalid'){
//     console.log(`You are ${firstname}`)
// }

// if (age == '20')
//     console.log(`You are ${age} years old`)

console.log(20 == '20') //true
console.log(20 ==='20') //false
console.log(20 != 30) //true

// d. EQUALITY OPERATOR
console.log(20 > 10) //true
console.log(100 >= 25) //true
console.log(20 < 10) //false
console.log(30 <= 30) //true

// e. STEP OPERATORS
// let age = 20
// console.log(age++)
// console.log(++age)

//f. LOGICAL OPERATORS

//OR OPERATOR (||)
console.log(true || true) //true
console.log(true || false) //true
console.log(false || true) //true
console.log(false || false) //false

// AND OPERATOR (&&)
console.log(true && true) //true
console.log(true && false) //false
console.log(false && true) //false
console.log(false && false) //false



/* DATATYPES
Datatypes are just the categorization of data. Programming languages like python have only 4 data types but javascript has 8 data types.

1. NUMBER
This includes;
i. Integers
ii. Float
iii. NaN (Not a Number)
iv. Infinity
*/

console.log(typeof(20))
console.log(typeof(30.5))
console.log(typeof(NaN))
console.log(typeof(Infinity))

/* 2. STRINGS
Strings are sequence of characters in a single or double quotes representing a text;
-> ""
-> ''
-> `` => string literal
*/

let playerName = 'Lionel Messi'
let favClub = 'Arsenal "Gunners"'
let favSport = 'Cycling'

console.log(` Precious' favorite sport is ${favSport} `)

//STRING METHODS

let university = 'LandMark'
//string methods all appear when you type full stop
//index starts counting from 0 while length is from 1

console.log(university.toUpperCase())
console.log(university.toLowerCase())
console.log(university.startsWith(`Land`))
console.log(university.endsWith(`rk`))
console.log(university.includes(`dM`))
console.log(university.indexOf(`M`))
const newStudent = "Khalid"
console.log(newStudent.length)
const newStudentAgain = "Khalid, welcome!"
console.log(newStudentAgain.split(" "))
console.log(newStudentAgain.split(""))
const password = '  123  45  7    '
console.log(password)
console.log(password.trim())
console.log()

// 3. BOOLEAN

console.log(true || true) //true
console.log(true || false) //true
console.log(false || true) //true
console.log(false || false) //false
console.log(true && true) //true
console.log(true && false) //false
console.log(false && true) //false
console.log(false && false) //false

// 4. UNDEFINED
// Declaring a variable and not assigning a value to it. undefined means not knowing the value yet.
let laptopModel
console.log(laptopModel)

// 5. NULL
// For null, the variable that was declared intentionally does not have a value assigned.
let laptopBox = null
console.log(laptopBox)

// 6. BigInt
// It means a very big integer, one that the number datatype cannot handle.

// 7. Objects

/* Primitive data types are datatypes that can hold only one value. Objects are non primitive data types because they can hold multiple values. Objects hold the key-value pair. the variable is called key and the data is called value. */
// curly braces can be used for template literals (strings)

// let awardWinnerIdentity = {
//     "first name": 'Khalid Kashim',
//     glasses: false,
//     bagType: 'laptop bag',
//     laptoptype: 'HP'
// }
// console.log(awardWinnerIdentity)

// {} is used for objects
// [] is used for arrays
// () parenthesis is used for methods

// const rectangle = {
//     length: 50,
//     height: 20
// };
// console.log(rectangle)

// const personInfo = {
//     firstName: "John",
//     lastName: "Philip",
//     isMarried: true,
//     age: 26,
//     skills: [
//         "HTML",
//         "CSS",
//         "JS",
//         7
//     ]
// }
// console.log(personInfo)
// console.log(personInfo.firstName)

const person = {
    firstName: "Muhammad Khalid",
    lastName: "Kashim",
    isMarried: false,
    language: "English",
    favFood: "Fries",
    favColour: "Green",
    skills: [
        "Web Development",
        "Football",
        "Writing"
    ]
}
console.log(person.isMarried)
console.log(person)