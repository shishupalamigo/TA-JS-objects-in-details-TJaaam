//Using functions

function user(name, id, noOfProjects) {
    let obj = {};
    obj.name = name;
    obj.id = id;
    obj.noOfProjects = noOfProjects;

    obj.getProjects = function() {
        return obj.noOfProjects;
    },
    obj.changeName = function(newName) {
        obj.name = newName;
        return obj.name;
    },
    obj.incrementProject = function() {
        return ++obj.noOfProjects;
    },
    obj.decrementProject = function() {
        return --obj.noOfProjects;
    }
    return obj;
}

let user1 = user("John", 217, 50);
let user2 = user("Arya", 200, 100);

//Prototypal Pattern
function user(name, id, noOfProjects) {
    let obj = Object.create(user.prototype);

    obj.name = name;
    obj.id = id;
    obj.noOfProjects = noOfProjects;

    return obj;
}

user.prototype = {
    getProjects: function() {
        return this.noOfProjects;
    },
    changeName: function(newName) {
        this.name = newName;
        return this.name;
    },
    incrementProject: function() {
        return ++this.noOfProjects;
    },
    decrementProject: function() {
        return --this.noOfProjects;
    }
}

let user3 = user("James", 41, 78);
let user4 = user("Janet", 23, 65);

//Pseudo classical way


function User(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
}

User.prototype = {
    getProjects() {
        return this.noOfProjects;
    },

    changeName(newName) {
        this.name = newName;
        return this.name;
    },

    incrementProject() {
        return ++this.noOfProjects;
    },

    decrementProject() {
        return --this.noOfProjects;
    }
}

let user5 = new User("John", 200, 400);
let user6 = new User("Mark", 20, 100);

// Class Pattern

class UserDetails {
    constructor(name, id, noOfProjects) {
        this.name = name;
        this.id = id;
        this.noOfProjects = noOfProjects;
    }

    getProjects() {
        return this.noOfProjects;
    }

    changeName(newName) {
        this.name = newName;
        return this.name;
    }

    incrementProject() {
        return ++this.noOfProjects;
    }

    decrementProject() {
        return --this.noOfProjects;
    }

}

let user7 = new UserDetails("John", 200, 400);
let user8 = new UserDetails("Mark", 20, 100);