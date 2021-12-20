const meanMedian = require("./part3problem5");

describe("meanMedian", () => {
    it("test 1", () => {
        expect(meanMedian([1,2,3,4])).toEqual("2.5 2.5");
    })
    it("test 2", () => {
        expect(meanMedian([1,2,3,4,5])).toEqual("3 3");
    })
    it("test 3", () => {
        expect(meanMedian([7,8,9,13,15])).toEqual("10.4 9");
    })
    it("test 4", () => {
        expect(meanMedian([10,20,30,40,50])).toEqual("30 30");
    })
    it("test 5", () => {
        expect(meanMedian([15,20,30,60,120])).toEqual("49 30");
    })
})