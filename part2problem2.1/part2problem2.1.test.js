const factor = require("./part2problem2.1");

describe("factor", () => {
    it("composite number 1", () => {
        expect(factor(6)).toEqual([1, 2, 3, 6]);
    })
    it("composite number 2", () => {
        expect(factor(20)).toEqual([1, 2, 4, 5, 10, 20]);
    })
    it("prime number 1", () => {
        expect(factor(7)).toEqual([1, 7]);
    })
    it("prime number 2", () => {
        expect(factor(23)).toEqual([1, 23]);
    })
})