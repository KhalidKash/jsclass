// A function in JavaScript is a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.
// A method is a function declared inside a class. 
// The act of creating a function is called function definition.
// functions are used  for structuring.
// all functions are closures in javascript (all functions can get data for global variables)
// A closure is a function that can access a global scope.

// TWO TYPES OF VARIABLES:
// Global variables can be accessed by any function and is not bound to a particular function.
// Local variable is restricted to a particular scope.

// A scope is the extent which a particular code can reach.
// Local scope is restricting a variable to the curly braces while with global scope, the variable is not restricted.

// Arguments are variables that are passed into the function when calling it.
// Parameters are variables that pass inside a function during the function declaration stage.

// function functionName (parameters){
//     operation;

// } 
// functionName(arguments)


// function sayMyName(myName = 'Khalid', age = '20 years'){
//     console.log(`Your name is ${myName} and you are ${age}`)
// }

// userName = 'Izuafa'
// yourAge = '19 years old'
// sayMyName(userName, yourAge)

// 

function welcomeMessage(firstName){
    console.log(`Welcome to the class ${firstName}`)
}
let firstName = 'Enyi'
welcomeMessage()

// 

function displayDetails(firstName, age, height){
    console.log(`Welcome to the class ${firstName}, you are ${age} years old and your height is ${height}`)
}

let personName = 'Jude'
let personAge = 13
personHeight = '5ft'

displayDetails(personHeight, personName, personAge)

// function is interested in the index of the parameters and not interested in the name