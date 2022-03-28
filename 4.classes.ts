// A class is a blueprint of an object's data and behviour
class Pet {
    // access modifiers: public default, private and readonly
    public name: string;
    private age: number;
    readonly species: string;

    // multiple constructor declaration is not allowed
    constructor (name: string, age: number, species: string) {
        // this referes to an instance of the class
        this.name = name;
        this.age = age;
        this.species = species;
    }

    getName () {
        // this.species = "Something else"; // cannot re-assign species because it's a read-only
        return `My name is ${this.name}`;
    }
}
const pet = new Pet("Lucy", 3, "Golden Retriever");
console.log(pet.getName());

// pet.age // age is private can't be accessed direcly

// Inheritance
class Dog extends Pet {

    owner: string;
    furColor: string;

    constructor (name: string, age: number, species: string, furColor: string, owner: string) {
        super(name, age, species); // inherits all poperties and methods from the base class except private ones
        // this.age // compiler error (property is private) 
        this.furColor = furColor;
        this.owner = owner;
    }

    bark () {
        console.log("Bark");
    }
}

// Interfaces inforce certain properties or behavior on variables or classes
// You can instantiate a class but you can't instantiate an interface
interface IPosition {
    top: number;
    right: number;
    left: number;
    bottom: number;
    move: (t: number, r: number, l: number, b: number) => void;
}

interface IDimension {
    height: number;
    maxHeight?: number;
    width: number;
    maxWidth?: number;
}

// A class can extend another class and iplement interfaces at the same time but declare extends before implements
// A class can extend only one base class but can implement multiple interfaces
class MyElement {
    parent: string;
    children: string[];
}

class MyImage extends MyElement implements IPosition, IDimension {
    height: number;
    maxHeight?: number;
    width: number;
    maxWidth?: number;

    top: number;
    right: number;
    left: number;
    bottom: number;

    static count: number = 0;

    constructor (h: number, w: number, t: number, r: number, l: number, b: number) {
        // this inside of the constructor refers to an instance of the class
        // to access static properties we must use the name of the class
        super() // to initialize properties from parent class
        this.height = h;
        this.width = w;

        this.top = t;
        this.right = r;
        this.left = l;
        this.bottom = b;

        MyImage.count += 1;
    }

    move (t: number, r: number, l: number, b: number) {
        this.top += t;
        this.right += r;
        this.left += l;
        this.bottom += b;
    };

    getParent (): string {
        // this inside an instance function refers to the instance in which the method will be called on 
        return this.parent;
    }

    static getImagesCount(): number {
        // this inside of a static method refers to the class itself
        return this.count;
    }

}

const myImage = new MyImage(200, 200, 0, 50, 80, 50);
myImage.parent = "div";
console.log(myImage.getParent());

const images: MyImage[] = [
    new MyImage(200, 200, 0, 50, 80, 50),
    new MyImage(500, 200, 300, 50, 80, 50),
    new MyImage(200, 600, 100, 50, 80, 50)
];
console.log(MyImage.getImagesCount());
