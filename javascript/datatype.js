// primitive 

var number = 38;
var string = " H e l i a ";
var booleanTrue = true;
var booleanFalse = false;
var nullVar = null;
var undefinedVar;
var bigintVar = 9999999999999999n;
var symbol1 = Symbol("hello");
var symbol2 = Symbol("hello");
console.log(undefinedVar);
console.log(nullVar);
console.log(symbol1 === symbol2);
console.log(symbol1 == symbol2);
console.log(1 == "1");
console.log(1 === "1");
var copy = number;
// nonprimitive

var obj = {
    firstName: "Helia",
    lastName: "Atyabi",
    age: 21,
    birthPlace: "Tehran",
    isActive: true,
    bestfriends: {
        firstName: "Helia",
        lastName: "Atyabi",
        age: 21,
        birthPlace: "Tehran",
        isActive: true
    }
};

console.log(obj);

var arr1 = [
    1, 2, 3,
    {
        name: "Helia"
    },
    true
];

var arr2 = [
    1, 2, 3,
    {
        name: "Helia"
    },
    true
];

// console.log(arr);
console.log(arr1 === arr2);

console.log(number + "38");

console.log(number + 38);

console.log(number + true);

console.log(number + false);

console.log(isNaN("number"));
console.log(number);
number += 5; //number = number + 5
number -= 5; //number = number - 5
console.log(number);

++number; //number = number + 1
console.log(number); 
--number; //number = number - 1
console.log(number); 

number *= 5; //number = number * 5
console.log(number); 
number /= 5; //number = number / 5
console.log(number); 

number %= 5; //baghimande
console.log(number);

