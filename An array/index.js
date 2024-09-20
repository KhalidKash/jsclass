// An array can store multiple values in a single variable, which can condense and organize our code.

// An index is the sequential number (index/key) assigned to the element where the first element of the array is assigned 0.


let arrayOfAge = [9, 12, 10, 8, 6, 7, 5, 15]

console.log(typeof(arrayOfAge))
// using properties and methods
// The length property of an array returns the length of an array 
console.log(arrayOfAge.length)
console.log(arrayOfAge.slice(2, 5))
console.log(arrayOfAge.reverse())

// // CONT'D

let arrayOfNames = ['Amangi', 'Khalid', 'Ahmed']

// // ARRAY METHOD

console.log(arrayOfAge[0])
console.log(arrayOfAge[1])
console.log(arrayOfAge[2])

arrayOfAge[1] = 50
arrayOfNames[3] = 'Adam'
console.log(arrayOfAge, arrayOfNames)

// // ARRAY SLICING

const firstThreeAges = arrayOfAge.slice(2, 5)
console.log(firstThreeAges)

const lastAge = arrayOfAge.slice(-3)
console.log(lastAge)

// // SLICING ARRAY OF OBJECTS

const studentProfile = [
   { studentName: 'Khalid',
     bestSubject: 'French',
     hobby: 'Reading',
    futureAmbition: 'Successful',
   },
   { studentName: 'Amangi',
     bestSubject: 'ICT',
     hobby: 'Gaming',
    futureAmbition: 'Software Developer',
   },
   { studentName: 'Eunice',
     bestSubject: 'Mathematics',
     hobby: 'Reading',
    futureAmbition: 'Successful',
   }
]

studentProfile[2]['studentName'] = 'Eunice Adams'
console.log(studentProfile[1].studentName)
console.log(studentProfile[0]['studentName'])
console.log(studentProfile[2]['studentName'])

// // POP METHOD

let arrayOfCars = ["Mercedez Benz", "Tesla Model 3", "Mercedez CLE 2050", "Audi R8", "Bentley Continental GT", "Dodge Challenger", "Tesla Model S", "McLaren 720"]

// To remove the last item of the array
arrayOfCars.pop()
console.log(arrayOfCars)

// PUSH METHOD
// To add an item to the end of an array
arrayOfCars.push('Lamborghini Urus')
console.log(arrayOfCars)

// SHIFT METHOD
// To remove the first item of the array
arrayOfCars.shift()
console.log(arrayOfCars)

// UNSHIFT METHOD
// To add an item to the start of an array
arrayOfCars.unshift('Porsche')
console.log(arrayOfCars)

