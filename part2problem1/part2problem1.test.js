const convert = require("./part2problem1");

describe("convert", () => {
    it("A grade", () => {
        expect(convert(100)).toEqual("A");
    })
    it("B+ grade", () => {
        expect(convert(65)).toEqual("B+");
    })
    it("B grade", () => {
        expect(convert(64)).toEqual("B");
    })
    it("C grade", () => {
        expect(convert(35)).toEqual("C");
    })
    it("D grade", () => {
        expect(convert(34)).toEqual("D");
    })
    it("Invalid value", () => {
        expect(convert(101)).toEqual("invalid");
    })
})