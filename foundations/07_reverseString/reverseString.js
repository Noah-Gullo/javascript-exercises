const reverseString = function(string) {
    let reversed = [];
    for(const char of string){
        reversed.unshift(char);
    }
    return reversed.join("");
};

// Do not edit below this line
module.exports = reverseString;
