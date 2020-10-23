// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;

        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        return `${this.name} has died in act of combat`;
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }

    receiveDamage(damage) {
        this.health -= damage;

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        return `A Saxon has died in combat`;
    }

}

// War
class War {

    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }

    vikingAttack() {
        let numRandom = Math.floor(Math.random() * this.vikingArmy.length);

        let temp = this.saxonArmy[numRandom].receiveDamage(this.vikingArmy[numRandom].strength);


        if (this.saxonArmy[numRandom].health < 1) {
            this.saxonArmy.splice(numRandom, 1);
        }
        return temp;
    }

    saxonAttack() {
        let numRandom = Math.floor(Math.random() * this.saxonArmy.length);

        let temp = this.vikingArmy[numRandom].receiveDamage(this.saxonArmy[numRandom].strength);

        if (this.vikingArmy[numRandom].health < 1) {
            this.vikingArmy.splice(numRandom, 1);
        }

        return temp;
    }

    showStatus() {
        let vikSize = this.vikingArmy.length == 0;
        let saxSize = this.saxonArmy.length == 0;

        if (vikSize)
            return "Saxons have fought for their lives and survive another day...";

        if (saxSize)
            return "Vikings have won the war of the century!";

        if (!vikSize && !saxSize)
            return "Vikings and Saxons are still in the thick of battle.";

    }


}