"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Customer.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Customer.prototype.setfirstName = function (firstName) {
        this.firstName = firstName;
    };
    Customer.prototype.setlastName = function (lastName) {
        this.lastName = lastName;
    };
    return Customer;
}());
exports.Customer = Customer;
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(Student.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (firstName) {
            this._firstName = firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (lastName) {
            this._lastName = lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var customer = new Customer("John", "Doe");
console.log(customer.getFullName());
customer.setfirstName("mike");
customer.setlastName("smith");
console.log(customer.getFullName());
var student = new Student("Alex", "carter");
console.log(student.firstName);
student.firstName = "mike";
console.log(student.firstName);
console.log(student._firstName);
student._lastName = "smith";
console.log(student._lastName);
