const analyzeArray = require("./analyzearray");

test("Analyze array min, max, average, and length", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({ min: 1, max: 8, average: 4, length: 6 });
})