import Character from './character';

export default class Daemon extends Character {
    constructor(name,type='Daemon'){
        super(name,type)
        this.distance = 100;
        this.attack = null;
        this.stoned = false;
    }
}