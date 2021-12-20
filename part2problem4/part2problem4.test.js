const palindrome = require("./part2problem4");

describe("palindrome", () => {
    it("test 1", () => {
        expect(palindrome("civic")).toEqual(true);
    })
    it("test 2", () => {
        expect(palindrome("katak")).toEqual(true);
    })
    it("test 3", () => {
        expect(palindrome("kasur rusak")).toEqual(true);
    })
    it("test 4", () => {
        expect(palindrome("kupu-kupu")).toEqual(false);
    })
    it("test 5", () => {
        expect(palindrome("lion")).toEqual(false);
    })
})