const playWithAsterisk = require("./part3problem1");

describe("playWithAsterisk", () => {
    it("test 1", () => {
        expect(playWithAsterisk(3)).toEqual("  *  \n * * \n* * *");
    })
    it("test 2", () => {
        expect(playWithAsterisk(5)).toEqual("    *    \n   * *   \n  * * *  \n * * * * \n* * * * *");
    })
    it("test 3", () => {
        expect(playWithAsterisk(6)).toEqual("     *     \n    * *    \n   * * *   \n  * * * *  \n * * * * * \n* * * * * *");
    })
})