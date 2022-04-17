// Type Guards
// A type guard is some expression that performs a runtime check that guarantees the type in some scope. 
// What happens when we need to know specifically whether we have a Fish?
class Fish {
    name: string;
    constructor(name: string) { this.name = name; }
    swim () {
        console.log("Swim");
    }
}
class Bird {
    name: string;
    constructor(name: string) { this.name = name; }
    fly () {
        console.log("fly");
    }
}

function getRandomPet () {
 const pets: (Fish | Bird)[] = [new Fish("Tuna"), new Bird("Eagle")];
 const index = Math.round(Math.random());
 return pets[index];
}
console.log(getRandomPet());
let pet1: Fish | Bird = getRandomPet();

// 1. Using the in operator
if ("swim" in pet1) {
  pet1.swim();
}
// However, you cannot use property access
// if (pet1.fly) {
//   pet1.fly();
// }

// To get the same code working via property accessors, we’ll need to use a type assertion:
// Note: This is not a best practice
let fishPet = pet1 as Fish; // assertion
let birdPet = pet1 as Bird;
 
if (fishPet.swim) {
  fishPet.swim();
} else if (birdPet.fly) {
  birdPet.fly();
}

// 2. Type predicates
// To define a type guard, we simply need to define a function whose return type is a type predicate:
function isFish(pet: Fish | Bird): pet is Fish { 
    return (pet as Fish).swim !== undefined;
}
/* pet is Fish is our type predicate in this example. A predicate takes the form 'parameterName is Type', where 
 parameterName must be the name of a parameter from the current function signature. */
/* Any time isFish is called with some variable, TypeScript will narrow that variable to that 
 specific type if the original type is compatible. */

// Both calls to 'swim' and 'fly' are now okay.
if (isFish(pet1)) { //true
  pet1.swim();
  pet1.name ="kjgl"
} else {
  pet1.fly();
}

// You may use the type guard isFish to filter an array of Fish | Bird and obtain an array of Fish:
const zoo: (Fish | Bird)[] = [new Fish("Shark"), new Fish("Whale"), new Bird("Eagle")];
const underWater1: Fish[] = zoo.filter(isFish);
// or, equivalently
const underWater2: Fish[] = zoo.filter<Fish>(isFish);
// const underWater3: Fish[] = zoo.filter<Fish>((pet) => isFish(pet)); // Signature '(pet: Fish | Bird): boolean' MUST be a type predicate.
const underWater4: Fish[] = zoo.filter<Fish>((pet): pet is Fish => (pet as Fish).swim !== undefined);

// 3. typeof type guards
function isNumber(x: any): x is number {
    return typeof x === "number";
}
   
function isString(x: any): x is string {
  return typeof x === "string";
}
   
function padLeft(value: string, padding: string | number) {
    console.log(isNumber(padding))
    if (isNumber(padding)) {
      console.log(padding + 10); //12
      return Array(padding + 1).join(" ") + value; // inserts empty space
    }
    if (isString(padding)) {
      return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

console.log(padLeft("s", 2));
console.log(padLeft("s", "a"));


