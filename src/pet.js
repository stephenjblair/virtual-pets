const MAXIMUM_FITNESS = 10;
const MINIMUM_AGE = 0;
const MINIMUM_HUNGER = 0;

function Pet(name) {
    this.name = name;
    this.age = MINIMUM_AGE;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = 10;

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
    };

Pet.prototype.feed = function() {
    if(this.feed) {
        this.hunger -= 3;
    } else {
        this.hunger = MINIMUM_HUNGER;
    }
}

Pet.prototype.walk = function() {
    if ((this.fitness + 4) <= MAXIMUM_FITNESS ) {
        this.fitness += 4;
    } else {
        this.fitness = MAXIMUM_FITNESS;
    }
    }
Pet.prototype.checkUp = function() {
    if(this.fitness <= 3) { 
        return "I need a walk";
    } if(this.hunger >= 5) {
        return "I am hungry";
    } if(this.fitness <= 3 && this.hunger >= 5) {
        return "I am hungry AND I need a walk";
    } else {
        "I feel great";
    }
}
Pet.prototype.isAlive = function() {
    return this.age < 30 && this.hunger < 10 && this.fitness > 0;
}
}

module.exports = Pet;