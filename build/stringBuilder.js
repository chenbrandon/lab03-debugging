"use strict";
var stringProcessor = (function () {
    function stringProcessor(input) {
        this.data = input;
    }
    stringProcessor.prototype.getString = function () {
        return this.data;
    };
    stringProcessor.prototype.setString = function (data) {
        this.data = data;
    };
    stringProcessor.prototype.reverse = function () {
        this.data = this.data.split('').reverse().join("");
    };
    return stringProcessor;
}());
var x = new stringProcessor("abcdefg");
console.log(x.getString());
x.reverse();
console.log(x.getString());
//# sourceMappingURL=stringBuilder.js.map