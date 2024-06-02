function capitalizeString(x) {
    return x[0].toUpperCase().concat(x.slice(1));
}

console.log(capitalizeString("farhan"));

module.exports = capitalizeString;