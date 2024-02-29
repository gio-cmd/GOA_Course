function Person(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.information = function() {
        console.log(this.name, this.lastName, this.age);
    };
}

const user = new Person('giorgi', 'vanishvili', 15);