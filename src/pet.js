const MAXIMUM_FITNESS = 10;
const FITNESS_INCREASE = 4;
const FITNESS_DECREASE = 3;
const INITIAL_AGE = 0;
const INITIAL_HUNGER = 0;
const INCREASE_HUNGER = 5;
const DECREASE_HUNGER = 3;


function Pet(name) {
    this.name = name;
    this.age = INITIAL_AGE;
    this.hunger = INITIAL_HUNGER;
    this.fitness = MAXIMUM_FITNESS;

Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
};

Pet.prototype.growUp = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }
    this.age += 1;
    this.hunger += INCREASE_HUNGER;
    this.fitness -= FITNESS_DECREASE;
    };

Pet.prototype.walk = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }
    if ((this.fitness + FITNESS_INCREASE) <= MAXIMUM_FITNESS ) {
        this.fitness += FITNESS_INCREASE;
    } else {
        this.fitness = MAXIMUM_FITNESS;
    }
    }
    
Pet.prototype.feed = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }
      if ((this.hunger - DECREASE_HUNGER) >= INITIAL_HUNGER) {
        this.hunger = this.hunger - DECREASE_HUNGER;
    } else {
        this.hunger = INITIAL_HUNGER;
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


}

module.exports = Pet;