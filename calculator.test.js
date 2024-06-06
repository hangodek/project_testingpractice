const myCalculator = require("./calculator")

test("Add number", () => {
    expect(myCalculator.add(50, 150)).toBe(200);
})
test("Substact number", () => {
    expect(myCalculator.substract(20, 10)).toBe(10);
})
test("Divide number", () => {
    expect(myCalculator.divide(35, 5)).toBe(7);
})
test("Multiply number", () => {
    expect(myCalculator.multiply(100, 10)).toBe(1000);
})