const Pet = require("../src/pet");

describe('constructor', () => {
    test('returns an object', () =>  {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
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

