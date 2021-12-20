const exponentiation = require("./part2problem5");

describe("exponentiation", () => {
    it("test 1", () => {
        expect(exponentiation(2, 3)).toEqual(8);
    })
    it("test 2", () => {
        expect(exponentiation(2, 12)).toEqual(4096);
    })
    it("test 3", () => {
        expect(exponentiation(7, 2)).toEqual(49);
    })
    it("test 4", () => {
        expect(exponentiation(9, 3)).toEqual(729);
    })
    it("test 5", () => {
        expect(exponentiation(22, 5)).toEqual(5153632);
    })
    it("test 6", () => {
        expect(exponentiation(1996, 0)).toEqual(1);
    })
    it("test 7", () => {
        expect(exponentiation(4212, -3)).toEqual("Wrong input");
    })
})