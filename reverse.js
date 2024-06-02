function reverseString(x) {
    let tempArr = [];
    let result = "";
    
    for (let i = x.length; i > -1; i--) {
        tempArr.push(x[i]);
    }

    result = tempArr.join("");
    
    return result;
}

console.log(reverseString("jerry"));

module.exports = reverseString;