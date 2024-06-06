const caesarCipher = require("./caesarcipher");

test("Decrypt text to another text", () => {
    expect(caesarCipher("Hello, World!")).toBe("Khoor, Zruog!");
})