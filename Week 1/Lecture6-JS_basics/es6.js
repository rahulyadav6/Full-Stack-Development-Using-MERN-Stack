// var x = 15;
// {
//     let x = 5;
//     console.log(x);
// }
// console.log(x);

const { set } = require("mongoose");



// var x = function(x,y){
//     return x+y;
// };

// const x = (x,y) =>{
//     return x+y;
// };



// const muyNumbers = [25,12,50,77,-1];
// let maxValue = Math.max(...muyNumbers);
// console.log(maxValue);


// const muyNumbers = [25,12,50,77,-1];
// let sum = 0;
// for(let num of muyNumbers){
//     sum+=num;
// }
// console.log(sum);




// const name = "CipherSchools";
// let text = "";
// for(let ch of name){
//     text += ch + " ";
// }
// console.log(text);




// const fruits = ([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200],
// ]);
// console.log(fruits);
// console.log(fruits.get("oranges"));









// const letters = new set();
// letters.add("a");
// letters.add("b");
// letters.add("a");

// console.log(letters);





// class car{
//     constructor(name,mfgyear){
//         this.name = name;
//         this.mfgyear = mfgyear;
//     }
// }
// const myCar1 = new Car("Nano",2022);
// const myCar2 = new Car("prosche",2023);

// console.log(myCar1,myCar2);



// const myFunction = () =>{ 
//     return new Promise((res,rej) =>{
//     setTimeout(() =>{
//         res();
//     },2000);
// });
// };

// myFunction().then(()=>{
//     console.log("Resolved");
// }).catch(()=>{
//     console.error("Rejected");
// })




// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     eyecolor: "Blue",
// };

// let id = Symbol("id");
// person[id] = 1234;
// console.log(person);


// const addTwo = (a,b=10) => a+b;
// console.log(addTwo(4));



const addNumbers = (...args) =>{
    let sum = 0;
    for(let arg of args){
        sum += arg;
    }
    return sum;
};
console.log(addNumbers(12,23,43,1,3));