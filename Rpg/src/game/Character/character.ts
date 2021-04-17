// @ts-ignore
import {Attributes} from './interfaces/attributes.ts'
// @ts-ignore
import {Money} from './interfaces/money.ts'


export class Character {

    name: string;
    level: number;
    experience: number;
    attributes: Attributes;
    money: Money;

    constructor(stats: any) {
        this.name = stats.name;
        this.level = stats.level;
        this.experience = stats.experience;
        this.attributes = stats.attributes;
        this.money = stats.money;
    };

    print_status(){
        const stats = {
            name: this.name,
            level: this.level,
            experience: this.experience,
            attributes: this.attributes,
            money: this.money
        }
        return stats;
    }
}
