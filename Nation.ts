export class Nation {
    private _name:string;
    private _gold:number;
    private _silver:number;
    private _bronze:number;


    constructor(name: string, gold: number, silver: number, bronze: number) {
        this._name = name;
        this._gold = gold;
        this._silver = silver;
        this._bronze = bronze;
    }

    get gold(): number {
        return this._gold;
    }

    set gold(value: number) {
        this._gold = value;
    }

    get silver(): number {
        return this._silver;
    }

    set silver(value: number) {
        this._silver = value;
    }

    get bronze(): number {
        return this._bronze;
    }

    set bronze(value: number) {
        this._bronze = value;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}