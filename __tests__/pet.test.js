const Pet = require("../src/pet");

describe('constructor', () => {
    test('returns an object', () =>  {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    test('sets the name property', () => {
        const pet = new Pet('Fido');
    
        expect(pet.name).toEqual('Fido');
      });
    });

/*describe("pet", () => {
    test("create a new pet object", () => {
        expect(pet("Fido")).toStrictEqual( {name: 'Fido'})
    })
    test("create a new pet object", () => {
        expect(pet("Benji")).toStrictEqual( {name: 'Benji'})
    })
    test("create a new pet object", () => {
        expect(pet("Cooper")).toStrictEqual( {name: 'Cooper'})
    }) */

