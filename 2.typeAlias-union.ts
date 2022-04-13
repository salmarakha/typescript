/** TYPE DEFINITIONS
 * variables
*/
const mood = "happy";
let score: number = 5;
// score = "6" // compiler error
let values: string[] = ["foo", "bar"]; 
let colors: [string, string, string] = ['#ff0000', '#00ff00', '#0000ff']; // tuple (fixed size and data types)


/** functions
 * you can skip the difinition of the return type
*/
const getFullname = (firstname: string, lastname: string): string => {
    return firstname + " " + lastname;
}
console.log(getFullname("Salma", "Rakha"));

// TYPE ALIAS, UNION AND INTERSECTION
/** UNION 
 * union is used to allow multiple types 
 * ex. default null (always use a default value instead of undefined, undefined is JS's default)
*/
let color: [string, string, string] | null = null; 
let user: (string | number)[] = ["Ben", 18]; // allow arrays to accept multiple types

// String literal types are often used with unions. 
// A string literal can only be assigned a particular string value. It can be considered a subtype of a string type.
type UserRole = 'admin' | 'moderator' | 'author';

/** TYPE ALIAS
 * what if we want to reuse the color variable type or give it a meaningful name:
*/
type PrimaryColors = [string, string, string];
let myColor: PrimaryColors = ['#ff0000', '#00ff00', '#0000ff'];

// TYPE ALIAS + UNION
let colour: PrimaryColors | null = null;

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


