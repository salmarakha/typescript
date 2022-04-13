var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Generics are used to create reusable components with a variaty of types
/** Returns the last element in an array of numbers */
function peek(arr) {
    return arr[arr.length - 1];
}
var arr1 = [1, 2, 3, 4];
console.log(peek(arr1));
var arr2 = ['a', 'b', 'c'];
// console.log(peek(arr2)) // peek only allows an array of numbers
// what if we want to use peek with any type?
// T represents type (any type)
// any will work but you'll lose your type difinition (always avoid any)
function genericPeek(arr) {
    return arr[arr.length - 1];
}
function peekAny(arr) {
    return arr[arr.length - 1];
}
console.log(genericPeek(arr1)); // type is pre defined: number[]
console.log(genericPeek(arr2)); // type is pre defined: string[]
console.log(peekAny(arr1)); // any[] : returns any
console.log(peekAny(arr2)); // any[] : returns any
// genericPeek(arr1).toUpperCase(); // throws an error at compilation
genericPeek(arr2).toUpperCase();
peekAny(arr1).toUpperCase(); // throws an error at runtime 
peekAny(arr2).toUpperCase();
// ensure that an object contains certain properties
function addFullName(obj) {
    return __assign(__assign({}, obj), { fullname: this.firsname + ' ' + this.lastname });
}
var data1 = {
    firstname: "Salma",
    lastname: "Rakha",
    age: 24
};
var data2 = {
    lastname: "Rakha",
    age: 24
};
console.log(addFullName(data1));
// console.log(addFullName(data2)); // error: property is missing firstname
// Another example
var addId = function (obj) {
    var id = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { id: id });
};
var doc1 = addId({ name: "Mariam", age: 25 });
// only the returned type of the function is detected
// console.log(doc1.name); // error: property does not exist on type {id: number}
// To fix that:
var addIdGeneric = function (obj) {
    var id = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { id: id });
};
var doc2 = addIdGeneric({ name: "Mariam", age: 25 });
console.log(doc2.name);
// Example
var getPrice = function () {
    // query from database
    var price = 2000;
    return { success: true, code: 200, data: price };
};
var Product = /** @class */ (function () {
    function Product(id, name, price, color) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.color = color;
    }
    return Product;
}());
var getProduct = function () {
    // query from database
    var product = new Product(1, "Camera", 5000, "Black");
    return { success: true, code: 200, data: product };
};
var product = getProduct();
console.log(product.data.name);
