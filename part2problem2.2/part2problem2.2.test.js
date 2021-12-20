const factor = require("./part2problem2.2");

describe("factor", () => {
    it("composite number 1", () => {
        expect(factor(6)).toEqual([6, 3, 2, 1]);
    })
    it("composite number 2", () => {
        expect(factor(20)).toEqual([20, 10, 5, 4, 2, 1]);
    })
    it("prime number 1", () => {
        expect(factor(7)).toEqual([7, 1]);
    })
    it("prime number 2", () => {
        expect(factor(23)).toEqual([23, 1]);
    })
})