interface Classes{
    hp: number,
    armor: any,
    weapons: any,
    tools: any,
    skills: any
}

export const Warrior: Classes = {
    hp: 25,
    armor: ['Warrior Armor'],
    weapons: ['Swords'],
    tools: [],
    skills: ['Brutal Cut']
}
export const Archer: Classes = {
    hp: 25,
    armor: ['Light Armor'],
    weapons: ['Bow'],
    tools: ['Arrows'],
    skills: ['Quick Arrows']
}
export const Mage: Classes = {
    hp: 25,
    armor: [],
    weapons: ['Staff'],
    tools: ['Magic Stones'],
    skills: ['Elemental Ball']
}
