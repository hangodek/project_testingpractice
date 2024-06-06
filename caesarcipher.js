function caesarCipher(x) {
    let tempArr = [];
    let result = [];

    for (let i = 0; i < x.length; i++) {

        switch(x[i]) {
            case "x":
                tempArr.push("97");
                break;
            case "y":
                tempArr.push("98");
                break;
            case "z":
                tempArr.push("99");
                break;
            case ",":
                tempArr.push("44");
                break;
            case " ":
                tempArr.push("32");
                break;
            case "!":
                tempArr.push("33");
                break;
            default:
                tempArr.push(x.charCodeAt(i) + 3);
                break;
        }

        
    }

    tempArr.map((item, index) => {
        result.push(String.fromCharCode(item));
    })

    return result.join("");
}

module.exports = caesarCipher;