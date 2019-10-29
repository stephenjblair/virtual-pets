const Pet = require("../src/pet");

describe('constructor', () => {
    test('returns an object', () =>  {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    test('sets the name property', () => {
        const pet = new Pet('Fido');
    
        expect(pet.name).toEqual('Fido');
      });
    test('has a initial age of 0', () => {
        const pet = new Pet('Fido');
    
        expect(pet.age).toEqual(0);
      });
    test('increments the age by 1', () => {
        const pet = new Pet('Fido');
    
        pet.growUp();
    
        expect(pet.age).toEqual(1);
      });
    test('has a initial hunger of 0', () => {
        const pet = new Pet('Fido');
    
        expect(pet.hunger).toEqual(0);
      });
    test('has a initial fitness of 10', () => {
        const pet = new Pet('Fido');
    
        expect(pet.fitness).toEqual(10);
      });  
    test('growUp method increases hunger by 5', () => {
        const pet = new Pet('Fido');
    
        pet.growUp();
    
        expect(pet.hunger).toEqual(5);
      });    
    test('growUp method decreases fitness by 3', () => {
        const pet = new Pet('Fido');
    
        pet.growUp();
    
        expect(pet.fitness).toEqual(7);
      });  
    test('increases fitness by to a maximum of 10', () => {
        const pet = new Pet('fido');
    
        pet.fitness = 8;
        pet.walk();
    
        expect(pet.fitness).toEqual(10);
      });   
    test('decreases hunger by 3', () => {
        const pet = new Pet('fido');
    
        pet.hunger = 8;
        pet.feed();
    
        expect(pet.hunger).toEqual(5);
      });  

    test('notifies me when fitness is less than 3', () => {
        const pet = new Pet('fido');
    
        pet.fitness = 2;
    
        expect(pet.checkUp()).toBe("I need a walk");
      }); 
         
    test('tells us whether or not the pet is alive', () => {
        const pet = new Pet('fido');
    
        pet.fitness = 0;
        pet.hunger  = 10;
        pet.age = 0;

        expect(pet.isAlive()).toEqual(false);
      });              
    });
