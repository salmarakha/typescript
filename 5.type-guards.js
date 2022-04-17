// Type Guards
// A type guard is some expression that performs a runtime check that guarantees the type in some scope. 
// What happens when we need to know specifically whether we have a Fish?
var Fish = /** @class */ (function () {
    function Fish(name) {
        this.name = name;
    }
    Fish.prototype.swim = function () {
        console.log("Swim");
    };
    return Fish;
}());
var Bird = /** @class */ (function () {
    function Bird(name) {
        this.name = name;
    }
    Bird.prototype.fly = function () {
        console.log("Swim");
    };
    return Bird;
}());
function getRandomPet() {
    var pets = [new Fish("Tuna"), new Bird("Eagle")];
    var index = Math.round(Math.random());
    return pets[index];
}
console.log(getRandomPet());
var pet1 = getRandomPet();
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
var fishPet = pet1; // assertion
var birdPet = pet1;
if (fishPet.swim) {
    fishPet.swim();
}
else if (birdPet.fly) {
    birdPet.fly();
}
// 2. Type predicates
// To define a type guard, we simply need to define a function whose return type is a type predicate:
function isFish(pet) {
    return pet.swim !== undefined;
}
/* pet is Fish is our type predicate in this example. A predicate takes the form parameterName is Type, where
 parameterName must be the name of a parameter from the current function signature. */
/* Any time isFish is called with some variable, TypeScript will narrow that variable to that
 specific type if the original type is compatible. */
// Both calls to 'swim' and 'fly' are now okay.
if (isFish(pet1)) {
    pet1.swim();
}
else {
    pet1.fly();
}
// You may use the type guard isFish to filter an array of Fish | Bird and obtain an array of Fish:
var zoo = [new Fish("Shark"), new Fish("Whale"), new Bird("Eagle")];
var underWater1 = zoo.filter(isFish);
// or, equivalently
var underWater2 = zoo.filter(isFish);
// const underWater3: Fish[] = zoo.filter<Fish>((pet) => isFish(pet)); // Signature '(pet: Fish | Bird): boolean' MUST be a type predicate.
var underWater4 = zoo.filter(function (pet) { return pet.swim !== undefined; });
// 3. typeof type guards
function isNumber(x) {
    return typeof x === "number";
}
function isString(x) {
    return typeof x === "string";
}
function padLeft(value, padding) {
    console.log(isNumber(padding));
    if (isNumber(padding)) {
        console.log(padding + 10);
        return Array(padding + 1).join(" ") + value; // inserts empty space
    }
    if (isString(padding)) {
        return padding + value;
    }
    throw new Error("Expected string or number, got '".concat(padding, "'."));
}
console.log(padLeft("s", 2));
console.log(padLeft("s", "a"));
var t = 5;
function isNumberr(x) {
    return typeof x === "number";
}
isNumberr(5);
