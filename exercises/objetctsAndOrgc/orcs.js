const adventurer = {
  name: "ariel",
  hitpoints: 10,
  belongings: ["sword", "potion", "tums"],
  companion: {
    name: "peanut",
    type: "corgi",
    companion: {
      name: "tick",
      type: "parasite",
      belongings: ["scuba tank", "rogan josh", "health insurance"],
    },
  },
};

//console.log(adventurer.belongings[0]);

// for(let i = 0; i < adventurer.belongings.length; i++) {
//     console.log(adventurer.belongings[i]);
// }

// //ACCESS THE COMPANION OBJECT
// console.log(adventurer.companion); // { }
// console.log(adventurer.companion.name); // values inside { }
// console.log(adventurer.companion.type);

// console.log(adventurer.companion.companion.type);

// //GET health insurance
// console.log(adventurer.companion.companion.belongings[2])

// const movies = [
//   { title: "Tokyo Story" },
//   { title: "Paul Blart: Mall Cop" },
//   { title: "L'Avventura" },
// ];

// // console.log(movies) //my array of objects
// // console.log(movies[0]) //first object in the array
// // console.log(movies[0].title)

// for(let i = 0; i < movies.length; i++){
//     console.log(movies[i]);
//     console.log(movies[i].title);
// }

// const foo = {
//     someArray: [1, 2, 3],
//     someObject: {
//         someProp: 'oh hai, mark'
//     },
//     someMethod: () => {
//         console.log("inside of method");
//     }
// }

// console.log(foo.someObject.someProp); // oh hai
// console.log(foo.someArray[0]); // 1
// console.log(foo.someMethod())

// const foo = [
//     [1, 2, 3, 4], //0
//     [5, 6, 7, 8], //1
//     [9, 10, 11, 12] //2
// ]

// console.log(foo[1][2]); //7

// const foo = [
//     1,
//     "hi",
//     ()=>{
//         console.log("fun")
//     }
// ];

// console.log(foo[2]() );

// const player = {
//   name: "Josh the Great",
//   health: 1000,
//   power: 1000,
//   stamina: 1000,
// };

// const bigBadBoss = {
//   name: "Magnardo the Merciless",
//   health: 1000000000,
//   power: 1000000000,
//   stamina: "Infinity",
// };

// const createEnemy = (nameIs, healthIs, powerIs, staminaIs) => {
//   const newEnemy = {
//     name: nameIs,
//     health: healthIs,
//     power: powerIs,
//     stamina: staminaIs,
//   };

//   return newEnemy;
// };

// const createPlayer = (nameIs, healthIs, powerIs, staminaIs) => {

//     const newPlayer = {
//     name: nameIs,
//     health: healthIs,
//     power: powerIs,
//     stamina: staminaIs,
//   };

//   return newPlayer;
// };

// class Character {
//   //constructor
//   constructor(name, age, eyes, hair, lovesCats = false, lovesDogs) {
//     this.legs = 2;
//     this.arms = 2;
//     this.name = name;
//     this.age = age;
//     this.eyes = eyes;
//     this.hair = hair;
//     this.lovesCats = lovesCats;
//     this.lovesDogs = lovesDogs || false;
//   }
//   //setter method
//   setHair(hairColor) {
//     this.hair = hairColor;
//   }
//   greet(otherCharacter) {
//     console.log("hi " + otherCharacter + "!");
//   }
//   classyGreeting(otherClassyCharacter) {
//     console.log("Greetings " + otherClassyCharacter.name + "!");
//   }
//   smite() {
//     console.log("I smite thee you vile person");
//   }
// }

// const p1 = new Character("Ariel", 97, "green", "silver", true, true);
// const enemy = new Character("Sauron", 10000, "red");

// // console.log(p1.greet("bob"));
// // console.log(p1.smite());

// // console.log(enemy.greet("sauron"));

// console.log(enemy.classyGreeting(p1));

//PARENT CLASSES

class Character {
  constructor(name, age, eyes, hair, lovesCats = true, lovesDogs) {
    this.legs = 2;
    this.arms = 2;
    this.name = name;
    this.age = age;
    this.eyes = eyes;
    this.hair = hair;
    this.lovesCats = lovesCats;
    this.lovesDogs = lovesDogs || true;
  }
  greet(otherCharacter) {
    console.log("hi " + otherCharacter + "!");
  }
  classyGreeting(otherClassyCharacter) {
    console.log("Howdy " + otherClassyCharacter.name + "!");
  }
  setHair(hairColor) {
    this.hair = hairColor;
  }
  smite() {
    console.log("i smited thee.");
  }
}

// class Hobbit extends  Character {
//     constructor(name, age, eyes, hair) {
//         super(name, age, eyes, hair);
//         this.skills = ["thievery", "speed", "willpower"];
//     }
//     steal () {
//         console.log("let's get away!")
//     }
//     greet (otherCharacter) {
//         console.log(`Hobbit says hello to ${otherCharacter}`)
//     }
//     smite() {
//         super.smite();
//         this.steal();
//     }
// }
const hobbit = new Character(33, 'brown', 'black')
console.log(hobbit);


// console.log(frodo);

// class Car {
//   constructor(maker, serialNumber) {
//     this.serialNumber = serialNumber;
//     this.maker = maker;
//   }
//   drive() {
//     console.log("vroom vroom");
//   }
// }

// //factory class
// class Factory {
//   constructor(company) {
//     this.company = company;
//     this.cars = [];
//   }
//   generateCar() {
//     const newCar = new Car(this.company, this.cars.length);
//     this.cars.push(newCar);
//   }
//   findCar (index) {
//     return this.cars[index]
//   }
// }

// const tesla = new Factory('Tesla');
// tesla.generateCar();
// tesla.generateCar();
// tesla.generateCar();
// console.log(tesla);
// console.log(tesla.findCar(0))

// const porche = new Factory('Porche');
// porche.generateCar();
// porche.generateCar();
// porche.generateCar();
// console.log(porche);
// console.log(porche.findCar(1));

// class Person {
//     static eyeColors () {
//       return ['blue', 'green', 'brown'];
//     }
//     // rest of class definition here...
//   }
//   // more code...
//   const superman = new SuperHero('Clark Kent', 30, Person.eyeColors()[0], 'black');

//   console.log(superman)