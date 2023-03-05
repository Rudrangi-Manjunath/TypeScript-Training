import { Shape } from "./Shape";
import { Circle } from "./Circle";

let c1 = new Circle(12,15,10);
console.log(c1.getInfo());

let shapes:Shape[] = []; 
shapes.push(c1);

for(let shape of shapes){
    console.log(shape.getInfo());
    console.log(shape.calculateArea());
}

