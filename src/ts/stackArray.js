"use strict";
exports.__esModule = true;
var StackArray = /** @class */ (function () {
    function StackArray() {
        this.items = [];
    }
    StackArray.prototype.push = function (elements) {
        this.items.push(elements);
    };
    StackArray.prototype.pop = function () {
        if (this.size() <= 0) {
            return undefined;
        }
        return this.items.pop();
    };
    StackArray.prototype.size = function () {
        return this.items.length;
    };
    StackArray.prototype.peek = function () {
        return this.items[this.size() - 1];
    };
    StackArray.prototype.clear = function () {
        this.items = [];
    };
    StackArray.prototype.isEmpty = function () {
        return this.size() === 0;
    };
    StackArray.prototype.toString = function () {
        return this.items.toString();
    };
    StackArray.prototype.toArray = function () {
        return this.items;
    };
    return StackArray;
}());
exports["default"] = StackArray;
