// @ts-ignore
import { Character } from '../character.ts'
// @ts-ignore
import {Attributes} from './interfaces/attributes.ts'
// @ts-ignore
import {Money} from './interfaces/money.ts'

const att: Attributes = {
    hp          : 10,
    strength    : 7,
    dexterity   : 15,
    constitution: 9,
    intelligence: 8,
    wisdom      : 7,
    charisma    : 8 
}
const money: Money = {
    copper: 0,
    silver: 1,
    gold: 0,
    platinum: 0,
}

const stats = {
    name: 'Kobold',
    level: 1,
    experience: 25,
    attributes: att,
    money: money
}


export const kobold = new Character(stats)