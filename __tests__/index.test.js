const {pet} = require("../src");

describe("pet", () => {
    test("create a new pet object", () => {
        expect(pet("Fido")).toStrictEqual( {name: 'Fido'})
    })
    test("create a new pet object", () => {
        expect(pet("Benji")).toStrictEqual( {name: 'Benji'})
    })
    test("create a new pet object", () => {
        expect(pet("Cooper")).toStrictEqual( {name: 'Cooper'})
    })
})

