// Generics are used to create reusable components with a variaty of types
/** Returns the last element in an array of numbers */
function peek (arr: number[]): number {
    return arr[arr.length - 1];
}
const numArr = [1, 2, 3, 4];
console.log(peek(numArr)); // 4

const strArr2 = ['a', 'b', 'c'];
// console.log(peek(strArr2)) // peek only allows an array of numbers

// what if we want to use peek with any type?
// T represents type (any type)
// any will work but you'll lose your type difinition (always avoid any)
// t, Type,
function genericPeek<T>(arr: T[]): T {
    return arr[arr.length - 1];
}

function peekAny(arr: any[]): any {
    return arr[arr.length - 1];
}

console.log(genericPeek(numArr)); // type is pre defined: number[]
console.log(genericPeek(strArr2)); // type is pre defined: string[]
console.log(peekAny(numArr)); // any[] : returns any
console.log(peekAny(strArr2)); // any[] : returns any

// genericPeek(numArr).toUpperCase(); // throws an error at compilation
genericPeek(strArr2).toUpperCase();

peekAny(numArr).toUpperCase(); // throws an error at runtime 
peekAny(strArr2).toUpperCase();

// Generic constraint: ensure that an object contains certain properties 
function addFullName<T extends {firstname: string, lastname: string}>(obj: T): T {
    return {...obj, fullname: this.firsname + ' ' + this.lastname };
}

const data1 = {
    firstname: "Salma",
    lastname: "Rakha",
    age: 24
}
const data2 = {
    lastname: "Rakha",
    age: 24
}
console.log(addFullName(data1));
// console.log(addFullName(data2)); // error: property is missing firstname

// Another example
const addId = (obj: object) => {
    const id = Math.floor(Math.random() * 100);
    return {...obj, id};
}

const doc1 = addId({name: "Mariam", age: 25});
// only the returned type of the function is detected
// console.log(doc1.name); // error: property does not exist on type {id: number}

// To fix that:
const addIdGeneric = <T>(obj: T) => {
    const id = Math.floor(Math.random() * 100);
    return {...obj, id};
}

const doc2 = addIdGeneric({name: "Mariam", age: 25});
console.log(doc2.name);

// Generics with interface
// Same logic can be used with classes
interface IResponse<T> {
    success: boolean,
    code: number,
    data: T     // data type can be specified later on use
}

// Example
const getPrice = () :IResponse<number> => {
    // query from database
    const price = 2000;
    return { success: true, code: 200, data: price }; 
}

class Product { // model
    id: number;
    name: string;
    price: number;
    color: string;
    constructor(id:number, name: string, price: number, color: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.color = color;
    }
}

const getProduct = () :IResponse<Product> => {
    // query from database
    const product = new Product(1, "Camera", 5000, "Black");
    return { success: true, code: 200, data: product };
}

const product = getProduct();
console.log(product.data.price);


