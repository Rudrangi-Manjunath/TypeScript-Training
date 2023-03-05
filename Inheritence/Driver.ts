import { Shape } from "./Shape";
import { Circle } from "./Circle";

let s1 = new Shape(12,34);
console.log(s1.getInfo());

let c1 = new Circle(12,15,10);
console.log(c1.getInfo());

let shapes:Shape[] = []; 
shapes.push(s1);
shapes.push(c1);

for(let shape of shapes){
    console.log(shape.getInfo());
}

