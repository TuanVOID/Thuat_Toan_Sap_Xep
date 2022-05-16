"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nation = void 0;
var Nation = /** @class */ (function () {
    function Nation(name, gold, silver, bronze) {
        this._name = name;
        this._gold = gold;
        this._silver = silver;
        this._bronze = bronze;
    }
    Object.defineProperty(Nation.prototype, "gold", {
        get: function () {
            return this._gold;
        },
        set: function (value) {
            this._gold = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Nation.prototype, "silver", {
        get: function () {
            return this._silver;
        },
        set: function (value) {
            this._silver = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Nation.prototype, "bronze", {
        get: function () {
            return this._bronze;
        },
        set: function (value) {
            this._bronze = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Nation.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return Nation;
}());
exports.Nation = Nation;
