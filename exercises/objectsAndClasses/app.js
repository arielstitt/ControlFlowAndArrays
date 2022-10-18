// const myCar = {
//     make: "Honda",
//     model: "accord",
//     year: 1990,
//     nickName: "kiki",
//     isLoud: true,
//     isRunning: false
// }
// console.log(myCar.nickName)
// console.log(myCar.model);

// const groceryList = ["chicken", "broccoli", "rice"];

// groceryList[0] //first
// groceryList[1] //second

// const chicken = {
//     wing: 2,
//     flavor: "mojo",
//     eat: () => {
//         console.log("nom nom nom")
//     }
// }

// chicken.eat();

// const house = {
//     doors: 9
// }

// house.window = 30; //add a property
// console.log(house);

// house.bathrooms = 7;
// house.hasGarden = true;

// console.log(house);

// house.bathrooms = 6;
// console.log(house);

// const myPet = {
//     name: "stinky",
//     age: 9,
//     favoriteThings: ["sleeping", "belly rubs", "treats"],
//     canSpeakFrench: false,
//     canSolveRubixCube: true,
// }

// console.log(myPet.name);

// const obj = {
// 	salutation: 'hi',
// 	count:4
// }

// //does a value exists inside of obj
// if (obj.salutation === "hi") {
// 	console.log('ok');
// }

// for (let i = 0; i < obj.count; i++) {
// 	console.log(i);
// }

// let result = obj.hasOwnProperty('salutation');
// console.log(result)

// const cohort = {
//     id: 'SEIR Flex Madeline',
//     students: ['Diana', 'Julio', 'Cory'],
//     instructors: ['Arthur', 'Nando', 'Teo', 'Sean'],
//     addStudent: function(name) {
//       name = name[0].toUpperCase() + name.substr(1).toLowerCase();
//       this.students.push(name);
//     },
//     pickRandomStudent: function() {
//       const rndIdx = Math.floor(Math.random() * this.students.length);
//       return this.students[rndIdx];
//     }
//   };

//Class Declaration

// class Vehicle {
//   //constructor
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }
// }

//Class Expression
//UNNAMED

//const v1 = new Vehicle();

class Vehicle {
  constructor(vin, make, model) {
    this.vin = vin;
    this.make = make; // return is not needed
    // because the new object is returned by default
    this.model = model;
}

  // instance method
  static start() {
    this.running = true;
    console.log("running")
  }
}

//instantiated a new object
const car = new Vehicle("12923", "Toyota", "Prius");

Vehicle.start()//from the class
car.start(); //Uncaught TypeError: car.start is not a function