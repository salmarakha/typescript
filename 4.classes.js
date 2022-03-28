var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// A class is a blueprint of an object's data and behviour
var Pet = /** @class */ (function () {
    // multiple constructor declaration is not allowed
    function Pet(name, age, species) {
        // this referes to an instance of the class
        this.name = name;
        this.age = age;
        this.species = species;
    }
    Pet.prototype.getName = function () {
        // this.species = "Something else"; // cannot re-assign species because it's a read-only
        return "My name is ".concat(this.name);
    };
    return Pet;
}());
var pet = new Pet("Lucy", 3, "Golden Retriever");
console.log(pet.getName());
// pet.age // age is private can't be accessed direcly
// Inheritance
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age, species, furColor, owner) {
        var _this = _super.call(this, name, age, species) || this;
        // this.age // compiler error (property is private) 
        _this.furColor = furColor;
        _this.owner = owner;
        return _this;
    }
    Dog.prototype.bark = function () {
        console.log("Bark");
    };
    return Dog;
}(Pet));
// A class can extend another class and iplement interfaces at the same time but declare extends before implements
// A class can extend only one base class but can implement multiple interfaces
var MyElement = /** @class */ (function () {
    function MyElement() {
    }
    return MyElement;
}());
var MyImage = /** @class */ (function (_super) {
    __extends(MyImage, _super);
    function MyImage(h, w, t, r, l, b) {
        var _this = 
        // this inside of the constructor refers to an instance of the class
        // to access static properties we must use the name of the class
        _super.call(this) // to initialize properties from parent class
         || this;
        _this.height = h;
        _this.width = w;
        _this.top = t;
        _this.right = r;
        _this.left = l;
        _this.bottom = b;
        MyImage.count += 1;
        return _this;
    }
    MyImage.prototype.move = function (t, r, l, b) {
        this.top += t;
        this.right += r;
        this.left += l;
        this.bottom += b;
    };
    ;
    MyImage.prototype.getParent = function () {
        // this inside an instance function refers to the instance in which the method will be called on 
        return this.parent;
    };
    MyImage.getImagesCount = function () {
        // this inside of a static method refers to the class itself
        return this.count;
    };
    MyImage.count = 0;
    return MyImage;
}(MyElement));
var myImage = new MyImage(200, 200, 0, 50, 80, 50);
myImage.parent = "div";
console.log(myImage.getParent());
var images = [
    new MyImage(200, 200, 0, 50, 80, 50),
    new MyImage(500, 200, 300, 50, 80, 50),
    new MyImage(200, 600, 100, 50, 80, 50)
];
console.log(MyImage.getImagesCount());
