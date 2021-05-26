// ANIMAL

let animalMethods = {
    eat () {
        console.log(`I live in ${this.location} and I can eat`);
    },
    
    changeLocation(newLocation) {
        this.location = newLocation;
    },

    summary() {
        return `I live in ${this.location} and I have ${this.numberOfLegs}`
    }
}

function createAnimal(location, numberOfLegs) {
    let animal = Object.create(animalMethods);
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;
    
    return animal;
}

// DOG

let dogMethods = {
   bark () {
       alert(`I am ${this.name} and I can bark 🐶`)
   },
   changeName(newName) {
       this.name =  newName;
   },
   changeColor(newColor) {
       this.color = newColor;
       return this.color;
   }, 
   summary() {
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
   }
}

function createDog(name, location, numberOfLegs, color) {
    let dog = createAnimal(location, numberOfLegs);
    Object.setPrototypeOf(dog, dogMethods);
    dog.name = name;
   
    dog.color = color;

    return dog;
}
Object.setPrototypeOf(dogMethods, animalMethods);


// CATS

let catMethods = {
    meow() {
        alert(`I am ${this.name} and I can do meow meow 😹`)
    },
    changeName(newName) {
        this.name =  newName;
    },
    changeColorOfEyes(newColor) {
        this.colorOfEyes = newColor;
        return this.colorOfEyes;
    }, 
    summary() {
         return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
    }    
}


function createCat (name, location, numberOfLegs, colorOfEyes) {
    let cat = createAnimal(location, numberOfLegs);
    Object.setPrototypeOf(cat, catMethods);
    cat.name = name;
   
    cat.colorOfEyes = colorOfEyes;

    return cat;   
}

Object.setPrototypeOf(catMethods, animalMethods);
