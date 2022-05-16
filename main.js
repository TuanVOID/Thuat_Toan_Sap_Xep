"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NationManager_1 = require("./NationManager");
var Nation_1 = require("./Nation");
var nationManager = new NationManager_1.NationManager();
var VietNam = new Nation_1.Nation("VietNam", 9, 6, 2);
var England = new Nation_1.Nation("England", 9, 6, 2);
var France = new Nation_1.Nation("France", 2, 4, 10);
var Findlan = new Nation_1.Nation("Findlan", 6, 3, 10);
var US = new Nation_1.Nation("US", 9, 6, 3);
nationManager.add(VietNam);
nationManager.add(England);
nationManager.add(France);
nationManager.add(Findlan);
nationManager.add(US);
// console.log(nationManager.getList())
console.log(nationManager.LeaderBoard());
