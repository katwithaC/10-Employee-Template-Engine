// TODO: Write code to define and export the Employee class

class Employee {
    constrctor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //getter method
    getName() {
        return this.name
    }

    getID() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return "Employee"
    }

}


module.exports = Employee;