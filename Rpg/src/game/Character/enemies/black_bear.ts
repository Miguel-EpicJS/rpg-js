// @ts-ignore
import { Character } from '../character.ts'
// @ts-ignore
import {Attributes} from './interfaces/attributes.ts'
// @ts-ignore
import {Money} from './interfaces/money.ts'

const att: Attributes = {
    hp          : 75,
    strength    : 15,
    dexterity   : 10,
    constitution: 14,
    intelligence: 2,
    wisdom      : 12,
    charisma    : 7
}
const money: Money = {
    copper: 0,
    silver: 5,
    gold: 0,
    platinum: 0,
}

const stats = {
    name: 'Black Bear',
    level: 3,
    experience: 100,
    attributes: att,
    money: money
}


export const black_bear = new Character(stats)