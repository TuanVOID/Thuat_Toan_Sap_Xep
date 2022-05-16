import {Nation} from "./Nation";

export class NationManager {

    nations: Nation[] = [];

    add(nation: Nation) {
        this.nations.push(nation)
    }

    getList(): Nation[] {
        return this.nations
    }

    swap(arr,a,b) {
        // let temp = arr[a]
        // arr[a] = arr[b]
        // arr[b] = temp;

        [this.nations[a],this.nations[b]] = [this.nations[b],this.nations[a]]
    }

    LeaderBoard() {
        for (let i = 0; i < this.nations.length; i++) {
            for (let j = 0; j < this.nations.length - 1 - i; j++) {
                if (this.nations[j].gold < this.nations[j + 1].gold) {
                    this.swap(this.nations,j,j+1)
                } else if (this.nations[j].gold == this.nations[j + 1].gold && this.nations[j].silver < this.nations[j + 1].silver) {
                    this.swap(this.nations,j,j+1)
                } else if (this.nations[j].gold == this.nations[j + 1].gold && this.nations[j].silver == this.nations[j + 1].silver && this.nations[j].bronze < this.nations[j + 1].bronze) {
                    this.swap(this.nations,j,j+1)
                } else if (this.nations[j].gold == this.nations[j + 1].gold && this.nations[j].silver == this.nations[j + 1].silver && this.nations[j].bronze == this.nations[j + 1].bronze) {
                    if (this.nations[j].name.localeCompare(this.nations[j + 1].name) > 0) {
                        this.swap(this.nations,j,j+1)
                    }
                }
            }
        }
        return this.nations
    }
}