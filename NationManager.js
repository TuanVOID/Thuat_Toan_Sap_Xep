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
    NationManager.prototype.LeaderBoard = function () {
        for (var i = 0; i < this.nations.length; i++) {
            for (var j = 0; j < this.nations.length - 1 - i; j++) {
                if (this.nations[j].gold < this.nations[j + 1].gold) {
                    var temp = this.nations[j];
                    this.nations[j] = this.nations[j + 1];
                    this.nations[j + 1] = temp;
                }
                else if (this.nations[j].gold == this.nations[j + 1].gold && this.nations[j].silver < this.nations[j + 1].silver) {
                    var temp = this.nations[j];
                    this.nations[j] = this.nations[j + 1];
                    this.nations[j + 1] = temp;
                }
                else if (this.nations[j].gold == this.nations[j + 1].gold && this.nations[j].silver == this.nations[j + 1].silver && this.nations[j].bronze < this.nations[j + 1].bronze) {
                    var temp = this.nations[j];
                    this.nations[j] = this.nations[j + 1];
                    this.nations[j + 1] = temp;
                }
                else if (this.nations[j].gold == this.nations[j + 1].gold && this.nations[j].silver == this.nations[j + 1].silver && this.nations[j].bronze == this.nations[j + 1].bronze) {
                    if (this.nations[j].name.localeCompare(this.nations[j + 1].name) > 0) {
                        var temp = this.nations[j];
                        this.nations[j] = this.nations[j + 1];
                        this.nations[j + 1] = temp;
                    }
                }
            }
        }
        return this.nations;
    };
    return NationManager;
}());
exports.NationManager = NationManager;
