class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi I'm ${this.name}.`;
    }
    getDescription() { 
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        
        if (this.hasMajor()) {
            description += ` They study ${this.major}.`
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}

const me = new Student('Aldo', 44, 'Computer Science');
console.log(me.getDescription());

const other = new Student('Marcela', 25);
console.log(other.getDescription());

const waldo = new Traveler('Waldo', 103, 'Germany.');
console.log(waldo.getGreeting());

const Ben = new Traveler('Ben', 10);
console.log(Ben.getGreeting());