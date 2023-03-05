export abstract class Shape{
    public x: number;
    public y: number;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    abstract calculateArea():number;

    public getx(): number{
        return this.x;
    }

    public gety(): number{
        return this.y;
    }

    public setx(x: number): void{
        this.x = x;
    }

    public sety(y: number): void{
        this.y = y;
    }

    getInfo(): string{
        return `x=${this.x}, y=${this.y}`;
    }
    
}