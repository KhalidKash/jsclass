// LOOPS:

// There are some operations that should be repeated more than once, that is why we have loops.
// for loop is executed for a particular amount of time that you have specified.
// With while loop, a program is executed infinitely unless you apply your own external condition to it.



// let gender = 'male'
// while (gender == 'male'){
//     console.log('You are a man!')
// }


// let number = 0;
//     while(number < 10){
//         console.log('I am a man');
//         number++
// }

// let number = 0;
//     while(number < 10){
//         if(number % 2 == 0){
//             console.log(`${number} is an even number`)
//         } else{
//             console.log(`${number} is an odd number`)
//         }
//         if (number == 0)
//             console.log(`${number} is a neutral number`)
//         number++
//     }

// DO WHILE LOOP:

// For do while loop, it first of all runs before executing the condition.
// A situation where the condition is not met but it at least does one.

// let secondnumber = 0
// do{
//     console.log(`The number is ${secondnumber}`)
//     secondnumber++
// } while (secondnumber < 5)

// // FOR LOOP:

// for(let i = 0; i < 5; i++){
//     console.log('I am a man.')
// }

// for(let i = 0; i < 5; i++){
//     if(i % 2 === 0 && i>0){
//         console.log(`${i} is an even number`)
//     }else if(i == 0){
//         console.log(`${i} is a neutral number`)  
//     }else{
//         console.log(`${i} is odd`)
//     }
// }

// // NESTED FOR LOOP:

// // You can have a for loop inside another for loop.

// for(let i = 0; i < 5; i++){
//     console.log('10 million naira alert by Amangi')
//     for (let j = 0; j < 3; j++)
//         console.log(`${j} Ram rice received from Yvonne`)
// }

// ASSIGNMENT:

// 1. Write a right angle triangle using nested for loop.
// 2. Write a palindrome checker. Give a command that if the word is a palindrome, it should output on the console whether the word is a palndrome or not.
// 3. Deploy the assignments to Git and share the link.



// FOR OF LOOP:

let arrayOfAges = [23, 21, 28, 26, 19]
for(age of arrayOfAges){
    console.log(++age)
}

// FOR IN LOOP:

const amangiAccount ={
    bank: 'Access bank',
    "account name": 'Amangi Money Money',
    accNumber: '0002179015'
}
for(keys in amangiAccount){
    console.log(amangiAccount[keys])
}