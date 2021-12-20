const ubahHuruf = require("./part3problem4");

describe("ubahHuruf", () => {
    it("test 1", () => {
        expect(ubahHuruf("SEPULSA OKE")).toEqual("COZEVCK YUO");
    })
    it("test 2", () => {
        expect(ubahHuruf("ALTERRA ACADEMY")).toEqual("KVDOBBK KMKNOWI");
    })
    it("test 3", () => {
        expect(ubahHuruf("INDONESIA")).toEqual("SXNYXOCSK");
    })
    it("test 4", () => {
        expect(ubahHuruf("GOLANG")).toEqual("QYVKXQ");
    })
    it("test 5", () => {
        expect(ubahHuruf("PROGRAMMER")).toEqual("ZBYQBKWWOB");
    })
})