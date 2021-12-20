const fullPrime = require("./part2problem6");

describe("fullPrime", () => {
    it("test 1", () => {
        expect(fullPrime(2)).toEqual("Ya");
    })
    it("test 2", () => {
        expect(fullPrime(3)).toEqual("Ya");
    })
    it("test 3", () => {
        expect(fullPrime(11)).toEqual("Tidak");
    })
    it("test 4", () => {
        expect(fullPrime(13)).toEqual("Tidak");
    })
    it("test 5", () => {
        expect(fullPrime(23)).toEqual("Ya");
    })
    it("test 6", () => {
        expect(fullPrime(29)).toEqual("Tidak");
    })
    it("test 7", () => {
        expect(fullPrime(37)).toEqual("Ya");
    })
    it("test 8", () => {
        expect(fullPrime(41)).toEqual("Tidak");
    })
    it("test 9", () => {
        expect(fullPrime(43)).toEqual("Tidak");
    })
    it("test 10", () => {
        expect(fullPrime(53)).toEqual("Ya");
    })
})