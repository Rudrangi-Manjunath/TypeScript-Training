"use strict";
exports.__esModule = true;
var Circle_1 = require("./Circle");
var c1 = new Circle_1.Circle(12, 15, 10);
console.log(c1.getInfo());
var shapes = [];
shapes.push(c1);
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    console.log(shape.getInfo());
    console.log(shape.calculateArea());
}
