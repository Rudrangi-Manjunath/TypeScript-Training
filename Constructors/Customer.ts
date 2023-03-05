export class Customer{
    private firstName: string ; // property
    private lastName: string ;  // property

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    public getFullName(): string{ // method
        return this.firstName + " " + this.lastName;
    }
    
    public setfirstName(firstName: string): void{
        this.firstName = firstName;
    }

    public setlastName(lastName: string): void{
        this.lastName = lastName;
    }

}

class Student{
    _firstName: string; // generally we don't use _ in front of property name   
    _lastName: string;  // but most of the developers use _ in front of property name

    constructor(firstName: string, lastName: string){
        this._firstName = firstName; 
        this._lastName = lastName;
    }

    public get firstName(): string{  // new way of creating getter and setter
        return this._firstName;
    }

    public set firstName(firstName: string){ // new way of creating getter and setter
        this._firstName = firstName;
    }
    public get lastName(): string{
        return this._lastName;
    }

    public set lastName(lastName: string){
        this._lastName = lastName;
    }
}

let customer = new Customer("John", "Doe");
console.log(customer.getFullName());

customer.setfirstName("mike");

customer.setlastName("smith");

console.log(customer.getFullName());

let student = new Student("Alex", "carter");
console.log(student.firstName);

student.firstName = "mike";
console.log(student.firstName);

console.log(student._firstName);

student._lastName = "smith";
console.log(student._lastName);


