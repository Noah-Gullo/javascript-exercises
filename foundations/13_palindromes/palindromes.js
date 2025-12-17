const palindromes = function (string) {
    const valid = "abcdefghijklmnopqrstuvwxyz1234567890";

    const convert = string.toLowerCase().split("").filter((char) => valid.includes(char)).join("");

    const reversed = convert.split("").reverse().join("");

    return reversed === convert;
};

// Do not edit below this line
module.exports = palindromes;
