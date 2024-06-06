function analyzeArray(x) {
    
    let myObj = {
        min: Math.min(...x),
        max: Math.max(...x),
        average: ((x.reduce((acc, cv) => acc + cv)) / x.length),
        length: x.length,
    };

    return myObj;
}

module.exports = analyzeArray;