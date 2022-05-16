import {NationManager} from "./NationManager";
import {Nation} from "./Nation";

let nationManager = new NationManager();

let VietNam = new Nation("VietNam",9,6,2)
let England = new Nation("England",9,6,2)
let France = new Nation("France",2,4,10)
let Findlan = new Nation("Findlan", 6,3,10)
let US = new Nation("US",9,6,3)

nationManager.add(VietNam);
nationManager.add(England);
nationManager.add(France);
nationManager.add(Findlan);
nationManager.add(US);

// console.log(nationManager.getList())
console.log(nationManager.LeaderBoard())


