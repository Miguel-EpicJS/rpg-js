// @ts-ignore
import { Character } from './Character/character.ts'

const stats = {
    name: "Miguel",
    level: 1,
    experience: 0,
    attributes: {
        hp          : 10,
        strength    : 10,
        dexterity   : 10,
        constitution: 10,
        intelligence: 10,
        wisdom      : 10,
        charisma    : 10, 
    },
    money: {
        copper: 0,
        silver: 0,
        gold: 0,
        platinum: 0,
    }
}

export const character: Character = new Character(stats)