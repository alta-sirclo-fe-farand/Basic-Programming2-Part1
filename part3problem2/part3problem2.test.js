const drawXYZ = require("./part3problem2");

describe("drawXYZ", () => {
    it("test 1", () => {
        expect(drawXYZ(1)).toEqual("Y");
    })
    it("test 2", () => {
        expect(drawXYZ(3)).toEqual("Y Z X\nZ Y X\nY Z X");
    })
    it("test 3", () => {
        expect(drawXYZ(5)).toEqual("Y Z X Z Y\nX Y Z X Z\nY X Y Z X\nZ Y X Y Z\nX Z Y X Y");
    })
})