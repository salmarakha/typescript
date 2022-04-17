/** TYPE DEFINITIONS
 * variables
*/
var mood = "happy";
var score = 5;
var username = "salmarakha";
// score = "6" // compiler error
var isEmpty = true;
// Array and Tuple
var values = ["foo", "bar"];
var arr = [5, 10, 20];
var colors = ['#ff0000', '#00ff00', '#0000ff']; // tuple (fixed size and data types)
// Typescript special types
// any
// that you can use whenever you don’t want a particular value to cause typechecking errors.
var object1 = { x: 0 };
// None of the following lines of code will throw compiler errors.
// object1.foo();
// object1();
// object1.bar = 100;
// object1 = "hello";
// const n: number = object1;
// unknown
// Any value can be assigned to a variable of type unknown. This means that unknown is a supertype of every other type.
var x;
x = 10;
x = "play";
var y;
y = 15;
y = "some string";
/** functions
 * you can skip the difinition of the return type
*/
// expression function with arrow function
var getFullname = function (firstname, lastname) {
    return firstname + " " + lastname;
};
console.log(getFullname("Salma", "Rakha"));
console.log(typeof getFullname); // 'function'
// TYPE ALIAS, UNION AND INTERSECTION
/** UNION
 * union is used to allow multiple types
 * ex. default null (always use a default value instead of undefined, undefined is JS's default)
*/
var color = null;
var user = ["Ben", 18]; // allow arrays to accept multiple types
var myColor = ['#ff0000', '#00ff00', '#0000ff'];
// TYPE ALIAS + UNION
var colour = null;
var role = 'admin';
var client = {
    id: 1,
    name: "Hamam",
    hobbies: ["reading", "football"],
    street: "Some street",
    city: "Amsterdam"
};
function getSomeValue() {
    // some logic
    return 5;
}
// Enums
// Enums are a feature added to JavaScript by TypeScript.
// Enums allow a developer to define a set of named constants. 
// TypeScript provides both numeric and string-based enums.
var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["No"] = 0] = "No";
    UserResponse[UserResponse["Yes"] = 1] = "Yes";
})(UserResponse || (UserResponse = {}));
function respond(recipient, message) {
    // ...
    console.log(message);
}
respond("Princess Caroline", UserResponse.Yes);
// Up is initialized with 1. All of the following members are auto-incremented from that point on. default starts from 0.
// enum with computed values
var E;
(function (E) {
    E[E["B"] = 0] = "B";
    E[E["A"] = getSomeValue()] = "A";
})(E || (E = {}));
// string based
var DIRECTION;
(function (DIRECTION) {
    DIRECTION["Up"] = "UP";
    DIRECTION["Down"] = "DOWN";
    DIRECTION["Left"] = "LEFT";
    DIRECTION["Right"] = "RIGHT";
})(DIRECTION || (DIRECTION = {}));
