import {Nation} from "./Nation";

export class NationManager {

    nations: Nation[] = [];

    add(nation: Nation) {
        this.nations.push(nation)
    }

    getList(): Nation[] {
        return this.nations
    }

    LeaderBoard() {
        for (let i = 0; i < this.nations.length; i++) {
            for (let j = 0; j < this.nations.length - 1 - i; j++) {
                if (this.nations[j].gold < this.nations[j + 1].gold) {
                    let temp = this.nations[j]
                    this.nations[j] = this.nations[j + 1]
                    this.nations[j + 1] = temp;
                } else if (this.nations[j].gold == this.nations[j + 1].gold && this.nations[j].silver < this.nations[j + 1].silver) {
                    let temp = this.nations[j]
                    this.nations[j] = this.nations[j + 1]
                    this.nations[j + 1] = temp;
                } else if (this.nations[j].gold == this.nations[j + 1].gold && this.nations[j].silver == this.nations[j + 1].silver && this.nations[j].bronze < this.nations[j + 1].bronze) {
                    let temp = this.nations[j]
                    this.nations[j] = this.nations[j + 1]
                    this.nations[j + 1] = temp;
                } else if (this.nations[j].gold == this.nations[j + 1].gold && this.nations[j].silver == this.nations[j + 1].silver && this.nations[j].bronze == this.nations[j + 1].bronze) {
                    if (this.nations[j].name.localeCompare(this.nations[j + 1].name) > 0) {
                        let temp = this.nations[j]
                        this.nations[j] = this.nations[j + 1]
                        this.nations[j + 1] = temp;
                    }
                }
            }
        }
        return this.nations
    }
}