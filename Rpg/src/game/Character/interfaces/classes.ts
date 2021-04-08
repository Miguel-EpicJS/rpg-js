// @ts-ignore
import { d4, d6, d8, d10, d12, d20} from '../../Dice/dice.ts';

interface Classes{
    hpDice: any,
    armor: any,
    weapons: any,
    tools: any,
    throws: any,
    skills: any
}

export const Barbarian: Classes = {
    hpDice: d12(),
    armor: ["Light Armor", "Medium Armor", "shields" ],
    weapons: ["Simple Weapons", "Martial Weapons"],
    tools: [],
    throws: ["Strength", "Constitution"],
    skills: [ "Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"]
}
export const Bard: Classes = {
    hpDice: d8(),
    armor: ["Light Armor"],
    weapons: ["Simple Weapons", "hand crossbows", "longswords", "rapiers", "shortswords"],
    tools: ["Musical Instruments"],
    throws: ["Dexterity", "Charisma"],
    skills: [ "All"]
}
export const Cleric: Classes = {
    hpDice: d8(),
    armor: ["Light Armor", "Medium Armor", "Shields"],
    weapons: ["Simple Weapons"],
    tools: [],
    throws: ["Wisdom", "Charisma"],
    skills: ["History", "Insight", "Medicine", "Persuasion", "Religion"]
}
export const Druid: Classes = {
    hpDice: d8(),
    armor: ["Light Armor", "Medium Armor", "Shields"],
    weapons: ["clubs", "daggers", "darts", "javelins", "maces", "quarterstaffs", "scimitars", "sickles", "slings", "spears"],
    tools: ["Herbalism Kit"],
    throws: ["Wisdom", "Intelligence"],
    skills: ["Arcana", "Animal Handling", "Insight", "Medicine", "Nature", "Perception", "Religion", "Survival"]
}

export const Fighter: Classes = {
    hpDice: d10(),
    armor: ["Light Armor", "Medium Armor", "Shields", "Heavy Armor"],
    weapons: ["Simple Weapons", "Martial Weapons"],
    tools: [],
    throws: ["Strength", "Constitution"],
    skills: ["Acrobatics", "Animal Handling", "Athletics", "History", "Insight", "Intimidation", "Perception", "Survival"]
}
export const Monk: Classes = {
    hpDice: d8(),
    armor: ["Light Armor", "Medium Armor", "Shields", "Heavy Armor"],
    weapons: ["Simple Weapons", "Martial Weapons"],
    tools: [],
    throws: ["Strength", "Constitution"],
    skills: ["Acrobatics", "Animal Handling", "Athletics", "History", "Insight", "Intimidation", "Perception", "Survival"]
}

