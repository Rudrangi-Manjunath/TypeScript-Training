export class Customer_1 {
    constructor(private _firstName: string, private _lastName: string) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(firstName: string) {
        this._firstName = firstName;
    }
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(lastName: string) {
        this._lastName = lastName;
    }
    public getFullName(): string {
        return this._firstName + " " + this._lastName;
    }
}

let customer_1 = new Customer_1("John", "Doe");
console.log(customer_1.getFullName());


    