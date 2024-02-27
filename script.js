const cars = ['Tesla', 'Mercedes', 'Honda'] //3 variables en un array
const [ randomCar ] = cars  //Tesla
const [ ,otherRandomCar ] = cars  //Mercedes
//Predict the output
console.log(randomCar)  //Tesla
console.log(otherRandomCar)  //Mercedes

////

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;  
//Predict the output
console.log(name); //error
console.log(otherName);


////


const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); //123456
console.log(hashedPassword); //error


////


const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2]; 
const [,first] = numbers;  //vale el 2
const [,,,second] = numbers; //vale el 5
const [,,,,,,,,third] = numbers; //vale el 2
//Predict the output
console.log(first == second); //false
console.log(first == third); //true


////

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; //vale value
const { secondKey } = lastTest; //vale el array [1, 5, 1, 8, 3, 3]
const [ ,willThisWork] = secondKey; //vale 5
//Predict the output
console.log(key); //value
console.log(secondKey); // [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); //1
console.log(willThisWork); //5