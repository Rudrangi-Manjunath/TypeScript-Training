import {Shape} from './Shape';

export class Circle extends Shape {
    private radius: number;
    
    constructor(x: number, y: number, radius: number){
        super(x, y);
        this.radius = radius;
    }

    public getRadius():number{
        return this.radius;
    }

    public setRadius(radius:number):void{
        this.radius = radius;
    }

    public getInfo(): string {
        return super.getInfo() +`and radius=${this.radius}`;
    }
}