function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.growUp = function() {
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
    };

Pet.prototype.growUp = function() {
    this.age += 1;
    };
}

const pet = new Pet('Fido');
pet.name
const hungry = new Pet('Fido');
pet.hunger
module.exports = Pet;