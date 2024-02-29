// 1

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    
    this.start = function() {
        console.log("Selling the", this.year, this.make, this.model);
    };
}

const car1 = new Car("Toyota", "Camry", 2022);
car1.start();


// 2

function Student(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;

    this.study = function(subject) {
        console.log(this.name, "is studying", subject);
    };
}

const student1 = new Student("Alice", 15, 10);
student1.study("Phisics");


// 3

function Animal(species, sound) {
    this.species = species;
    this.sound = sound;

    this.makeSound = function() {
        console.log(this.species, "says", this.sound);
    };
}

const dog = new Animal("Cat", "Meow");
dog.makeSound();


// 4

function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;

    this.calculateTotal = function() {
        return this.price * this.quantity;
    };
}

const laptop = new Product("Iphone", 1102, 2);
console.log("Total price:", Iphone.calculateTotal());
