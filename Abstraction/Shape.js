"use strict";
exports.__esModule = true;
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(x, y) {
        this.x = x;
        this.y = y;
    }
    Shape.prototype.getx = function () {
        return this.x;
    };
    Shape.prototype.gety = function () {
        return this.y;
    };
    Shape.prototype.setx = function (x) {
        this.x = x;
    };
    Shape.prototype.sety = function (y) {
        this.y = y;
    };
    Shape.prototype.getInfo = function () {
        return "x=".concat(this.x, ", y=").concat(this.y);
    };
    return Shape;
}());
exports.Shape = Shape;
