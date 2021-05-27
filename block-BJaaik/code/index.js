class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat() {
        return `Eats well cooked food`;
    }
    sleep() {
        return "Sleep 8 hrs a day.";
    }
    walk() {
        return "Walks long to ramain healthy";
    }
}

class Player extends Person {
    constructor(sportsName, name, age, gender){
        super(name, age, gender);
        this.sportsName = sportsName;
    }
    plays() {
        return `Plays ${this.sportsName} very well`;
    }
}

class Cricketer extends Player{
    constructor(teamName, sportsName, name, age, gender) {
        super(sportsName, name, age, gender);
        this.teamName = teamName;
    }
    playCricket() {
        return "Plays Cricket as an AllRounder";
    }
}

class Teacher extends Person {
    constructor(instituteName, name, age, gender) {
        super(name, age, gender);
        this.instituteName = instituteName;
    }
    teach() {
        return "Teaches Well!";
    }
}

class Artist extends Person {
    constructor(kind, name, age, gender) {
        super(name, age, gender);
        this.kind = kind;
    }
    createArt() {
        return `Is expert in ${this.kind} art`;
    }
}

let artist1 = new Artist("Dancing", "James", 25,  "Male");

let teacher1 = new Teacher("AltCampus", "Ankit", 27, "Male");

let cricketer1 = new Cricketer("India", "Cricket",  "Hardik Pandya", 28, "Male");

let player1 = new Player ("Badminton", "Saina Nehwal", 28, "female");