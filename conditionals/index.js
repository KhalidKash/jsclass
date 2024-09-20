/* CONDITIONALS

In programming, there are two major conditions: if statement and else statement.
In JavaScript:
if (condition){
perform operation
}

else{
do something else
}

SINGLE CONDITIONS:

let day = 'Thursday'
if(day == 'Wednesday'){
    alert('It is the middle of the week')
} else{
    alert('It is not the middle of the week')
}

/

    MULTIPLE CONDITIONS:

SWITCH STATEMENT
Note: It is a short way of writing your if and else statement with multiple conditions.

let day = 'Wednesday'
if(day == 'Wednesday'){
    alert('It is the middle of the week')
    } else if (day == 'Monday') {
        alert('It is the beginning of the week')
    } else if (day == 'Friday') {
        alert('It is the weekend')
    } else{
        alert('It is a regular day')
    }

let num = 3
if(num > 0){
    alert('3 is a positive number')
} else if (num < 0){
    alert('3 is a negative number')
}
console.log(num)

let weather = 'cloudy'
switch(weather){
    case 'rainy':
        console.log('You need a rain coat.')
        break
    case 'cloudy':
        console.log('It might be cold, you need a jacket.')
        break
    case 'sunny':
        console.log('Go out freely.')
        break
    default:
        console.log('No need for rain coat.')
}

let weather = 'rainy'
switch(weather){
    case 'rainy':
        console.log('Go out with an umbrella.')
        break
    case 'cloudy':
        console.log('Take an umbrella just in case.')
        break
    case 'sunny':
        console.log('You are free to go out.')
        break
    default:
        console.log('Why even bother going out at all.')
}

let dayUserInput = prompt('What day is today?')
let day = dayUserInput.toLowerCase()

switch (day){
    case 'monday':
        console.log('Today is Monday')
        break
    case 'tuesday':
        console.log('Today is Tuesday')
        break
    case 'wednesday':
        console.log('Today is Wednesday')
        break
    case 'thursday':
        console.log('Today is Thursday')
        break
    case 'friday':
        console.log('Today is Friday')
        break
    case 'saturday':
        console.log('Today is Saturday')
        break
    case 'sunday':
        console.log('Today is Sunday')
        break
    default:
        console.log('It is not a week day.')
}


let num = prompt('Enter a number')

switch (true){
    case num > 0:
        console.log('Number is a positive number')
        break
    case num < 0:
        console.log('NUmber is a negative number')
        break
    case num = 0:
        console.log('Number is equal to 0')
    default:
        console.log('Number is not a number')
}
*/

// ASSIGNMENT
// 1
let maleNameInput = prompt('Insert a male name')
let maleName = maleNameInput.toLowerCase()

switch(maleName){
    case 'john':
        alert('John is a male name')
        break
    case 'peter':
        alert('Peter is a male name')
        break
    case 'philip':
        alert('Philip is a male name')
        break
    case 'jeremiah':
        alert('Jeremiah is a male name')
        break
    case 'isaiah':
        alert('Isaiah is a male name')
        break
    default:
        alert(`${maleName} is not a male name`)
}

// 2
let num = prompt('Enter a number')

switch (true){
    case num > 0:
        alert(`${num} is a positive number`)
        break
    case num < 0:
        alert(`${num} is a negative number`)
        break
    case num = 0:
        alert(`${num} is equal to 0`)
    default:
        alert(`${num} is not a number`) 
}