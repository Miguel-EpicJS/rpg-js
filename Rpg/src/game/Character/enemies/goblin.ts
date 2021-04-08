// @ts-ignore
import { Character } from '../character.ts'
// @ts-ignore
import {Attributes} from './interfaces/attributes.ts'
// @ts-ignore
import {Money} from './interfaces/money.ts'

const att: Attributes = {
    strength    : 8,
    dexterity   : 14,
    constitution: 10,
    intelligence: 10,
    wisdom      : 8,
    charisma    : 8 
}
const money: Money = {
    copper: 30,
    silver: 0,
    gold: 0,
    platinum: 0,
}

const stats = {
    name: 'Goblin',
    level: 2,
    experience: 50,
    attributes: att,
    money: money
}


export const goblin = new Character(stats)