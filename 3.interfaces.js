var emp = {
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
var obj = {
    name: "Salma",
    age: 22
};
/* An example use case: if you're working on a large class with other developers and you want to prevent others from
    changing the values of a property */
// class X {
//     prop = {
//         name: "foo",
//         age: 5
//         arr: [1, 2, 3]
//     } as const;
//     getAll() {
//         this.prop.age = 50; // this line throws an error
//     }
// }
// this is not the same as: (there is a difference between mutating and re-assigning a variable)
var obj1 = {
    name: "Salma",
    age: 22,
    arr: [1, 2, 3]
};
