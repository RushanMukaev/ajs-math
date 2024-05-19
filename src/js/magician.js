import Character from './character';

export default class Magician extends Character {
    constructor(name,type='Magician'){
        super(name,type)
        this.distance = 100;
        this.attack = null;
        this.stoned = false;
    }
}