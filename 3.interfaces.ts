/** Interfaces
 * used as a contract; to show how an object will look like
 * Pro tip: use null insted of '?' so you have to explicitly state that nationality is 
    null and it isn't left blank accidentally. (BOTH WAYS ARE FINE CHOOSE WHAT SUITES YOU BETTER)
 * you can prefix any property in an interface with 'readonly' to declare as an immutable property
 */
interface Person {
    name: string,
    age: number,
    nationality?: string
    // nationality: string | null
}
interface Job {
    title: string,
    company: string
}

// we can generate a string literal of interface keys  using keyof
type JobKeys = keyof Job; // 'title' | 'company'

// extends is used with interfaces instead of intersction
// you can extend multiple interfaces (general rule)
interface Employee extends Person, Job {
    salary: number
}
// this is called "declaration merging"; any variable or class that implements Employee must include both salary and workHours.
// this can't be done using type alias
interface Employee {
    workHours: number
}
let emp: Employee = {
    name: "Salma",
    age: 20,
    nationality: null,
    title: "Developer",
    company: "Google",
    salary: 100000,
    workHours: 30
};
emp.name = "Mariam"; 
console.log(emp);

// ** Tip: you can use 'as const' to prevent users from changing any property in an object (all properties are readonly)
let obj = {
    name: "Salma",
    age: 22
} as const;

/* An example use case: if you're working on a large class with other developers and you want to prevent others from 
    changing the values of a property */
class X {
    prop = {
        name: "foo",
        age: 5,
        arr: [1, 2, 3]
    } as const;
    getAll() {
        // this.prop.age = 50; // cannot assign age because it's read-only
    }
}

// this is not the same as: (there is a difference between mutating and re-assigning a variable)
const obj1 = {
    name: "Salma",
    age: 22,
    arr: [1, 2, 3]
};
