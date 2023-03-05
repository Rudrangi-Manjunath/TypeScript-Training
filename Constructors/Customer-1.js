"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_1 = void 0;
var Customer_1 = /** @class */ (function () {
    function Customer_1(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customer_1.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (firstName) {
            this._firstName = firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer_1.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (lastName) {
            this._lastName = lastName;
        },
        enumerable: false,
        configurable: true
    });
    Customer_1.prototype.getFullName = function () {
        return this._firstName + " " + this._lastName;
    };
    return Customer_1;
}());
exports.Customer_1 = Customer_1;
var customer_1 = new Customer_1("John", "Doe");
console.log(customer_1.getFullName());
