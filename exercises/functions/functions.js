// console.log( one());

// //function declaration
// function one(){
//     return "one";
// }

// console.log(two());
// // const shortenedTwo = () => 2;

// const arielStitt = {
//     name: "Ariel",
//     occupation: "Technical Instructor",
//     overTwentyOne: true,
//     age: 99
// }
// const increaseAge = (person) => {
//     //dot notation
//     person.age += 1;
//     console.log(`Hooray it's your ${person.age} birthdayyyyyyy`);
// }

// //call the function
// increaseAge(arielStitt);

// {
//     name: "Maria",
//     skilss: ["html", "css", ]
// }

// let maria = getDevObject("Maria", "HTML", "CSS", "JavaScript", "MERN");

// function getDevObject(name, ...skills){
//     return {
//         devName: name,
//         jobSkills: skills
//     }
// }

// console.log(getDevObject(maria));

// function getDevObject(name) {
//     let skills = [];

//     for(let i = 1; i < arguments.length; i++) {
//         skills.push(arguments[i]);
//     }

//     return {
//         devName: name,
//         jobSkills: skills
//     }
// }

// console.log(getDevObject(maria));

const sayName = (name) => {
  //console.log('Hello my name is ' + name); //concatination
  console.log(`Hello my name is ${name}`);
};

sayName("Kadija");
sayName("Max the Maverick");
sayName("Overton");

const calculateAreaOfSquare = (length, height) => {
  let sqft = length * height;
  console.log(`My square or rectangle is ${sqft} square feet`);
};

calculateAreaOfSquare(38, 18);

const car = { 
    color: "blue", 
    hp: 4000, 
    year: 1989 
};

//We can console.log the entire object:
console.log(car);

//We can access the values stored in key using dot notation:
console.log(car.color)

//we can add properties to the car using dot notation

car.doors = 4;

console.log(car);

const mogwai = {} 
mogwai.name = 'Gizmo';

const mogwai = { } 
mogwai = { 
    name: 'Gizmo' 
}