"use strict";
exports.__esModule = true;
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var s1 = new Shape_1.Shape(12, 34);
console.log(s1.getInfo());
var c1 = new Circle_1.Circle(12, 15, 10);
console.log(c1.getInfo());
var shapes = [];
shapes.push(s1);
shapes.push(c1);
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    console.log(shape.getInfo());
}
