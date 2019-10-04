"use strict";
exports.__esModule = true;
var HelloWorld = /** @class */ (function () {
    function HelloWorld() {
    }
    HelloWorld.prototype.sayHello = function (name) {
        console.log('Hello : ', sayHello('world'));
        return "Hello " + name + "!";
    };
    return HelloWorld;
}());
exports.HelloWorld = HelloWorld;
