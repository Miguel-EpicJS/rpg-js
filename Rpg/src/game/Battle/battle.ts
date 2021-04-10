// @ts-ignore
import {Character} from '../Character/character.ts'

export class Battle{
    player: Character;
    enemy: Character;

    constructor(player: Character, enemy: Character){
        this.player = player
        this.enemy = enemy
    }

    battle(){
        console.log("Iniciando batalha, você encontrou um ", this.enemy.name);
        
    }
}