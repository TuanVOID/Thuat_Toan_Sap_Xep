"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NationManager = void 0;
var NationManager = /** @class */ (function () {
    function NationManager() {
        this.nations = [];
    }
    NationManager.prototype.add = function (nation) {
        this.nations.push(nation);
    };
    NationManager.prototype.getList = function () {
        return this.nations;
    };
    NationManager.prototype.swap = function (arr, a, b) {
        // let temp = arr[a]
        // arr[a] = arr[b]
        // arr[b] = temp;
        var _a;
        _a = [this.nations[b], this.nations[a]], this.nations[a] = _a[0], this.nations[b] = _a[1];
    };
    NationManager.prototype.LeaderBoard = function () {
        for (var i = 0; i < this.nations.length; i++) {
            for (var j = 0; j < this.nations.length - 1 - i; j++) {
                if (this.nations[j].gold < this.nations[j + 1].gold) {
                    this.swap(this.nations, j, j + 1);
                }
                else if (this.nations[j].gold == this.nations[j + 1].gold && this.nations[j].silver < this.nations[j + 1].silver) {
                    this.swap(this.nations, j, j + 1);
                }
                else if (this.nations[j].gold == this.nations[j + 1].gold && this.nations[j].silver == this.nations[j + 1].silver && this.nations[j].bronze < this.nations[j + 1].bronze) {
                    this.swap(this.nations, j, j + 1);
                }
                else if (this.nations[j].gold == this.nations[j + 1].gold && this.nations[j].silver == this.nations[j + 1].silver && this.nations[j].bronze == this.nations[j + 1].bronze) {
                    if (this.nations[j].name.localeCompare(this.nations[j + 1].name) > 0) {
                        this.swap(this.nations, j, j + 1);
                    }
                }
            }
        }
        return this.nations;
    };
    return NationManager;
}());
exports.NationManager = NationManager;
