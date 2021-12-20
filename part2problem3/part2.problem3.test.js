const primeNumber = require("./part2problem3");

describe("primeNumber", () => {
    it("test 1", () => {
        expect(primeNumber(11)).toEqual("Bilangan Prima");
    })
    it("test 2", () => {
        expect(primeNumber(13)).toEqual("Bilangan Prima");
    })
    it("test 3", () => {
        expect(primeNumber(17)).toEqual("Bilangan Prima");
    })
    it("test 4", () => {
        expect(primeNumber(20)).toEqual("Bukan Bilangan Prima");
    })
    it("test 5", () => {
        expect(primeNumber(35)).toEqual("Bukan Bilangan Prima");
    })
})