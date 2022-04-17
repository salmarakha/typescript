/** TYPE DEFINITIONS
 * variables
*/
const mood = "happy";
let score: number = 5;
let username: string = "salmarakha";
// score = "6" // compiler error
let isEmpty: boolean = true;

// Array and Tuple
let values: string[] = ["foo", "bar"]; 
let arr: Array<number> = [5, 10, 20]; 
let colors: [string, string, string] = ['#ff0000', '#00ff00', '#0000ff']; // tuple (fixed size and data types)

// Typescript special types
// any
// that you can use whenever you don’t want a particular value to cause typechecking errors.
let object1: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// object1.foo();
// object1();
// object1.bar = 100;
// object1 = "hello";
// const n: number = object1;

// unknown
// Any value can be assigned to a variable of type unknown. This means that unknown is a supertype of every other type.
let x: unknown;
x = 10;
x = "play";
let y: any;
y = 15;
// let z: number = y
y = "some string";


/** functions
 * you can skip the difinition of the return type
*/
// expression function with arrow function
const getFullname = (firstname: string, lastname: string): string => {
    return firstname + " " + lastname;
}
console.log(getFullname("Salma", "Rakha"));
console.log(typeof getFullname); // 'function'

// TYPE ALIAS, UNION AND INTERSECTION
/** UNION 
 * union is used to allow multiple types 
 * ex. default null (always use a default value instead of undefined, undefined is JS's default)
*/
let color: [string, string, string] | null = null; 
let user: (string | number)[] = ["Ben", "18"]; // allow arrays to accept multiple types

/** TYPE ALIAS
 * what if we want to reuse the color variable type or give it a meaningful name:
 */
type PrimaryColors = [string, string, string];
let myColor: PrimaryColors = ['#ff0000', '#00ff00', '#0000ff'];

// TYPE ALIAS + UNION
let colour: PrimaryColors | null = null;

// String Literals
// String literal types are often used with unions. 
// A string literal can only be assigned a particular string value. It can be considered a subtype of a string type.
type UserRole = 'admin' | 'moderator' | 'author';
let role: UserRole = 'admin';

/** TYPE ALIAS + INTERSECTION
 * intersection is used to combine multiple types
 * you can add a '?' to make a property optional => name?: string, if name isn't provided it will be undefined
 */
type User = {
    id: number,
    name: string,
    hobbies: string[]
} 
type Address = {
    street: string,
    city: string
}
type Client = User & Address; // intersection
let client: Client = {
    id: 1,
    name: "Hamam",
    hobbies: ["reading", "football"],
    street: "Some street",
    city: "Amsterdam"
}

function getSomeValue() {
    // some logic
    return 5;
}

// Enums
// Enums are a feature added to JavaScript by TypeScript.
// Enums allow a developer to define a set of named constants. 
// TypeScript provides both numeric and string-based enums.
enum UserResponse {
    No =1,
    Yes  //2
}

function respond(recipient: string, message: UserResponse): void {
    // ...
    console.log(message); //2
}
respond("Princess Caroline", UserResponse.Yes);

// Up is initialized with 1. All of the following members are auto-incremented from that point on. default starts from 0.
// enum with computed values
enum E {
    B, // = 0 by defaul
    A = getSomeValue(),
}
// string based
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
