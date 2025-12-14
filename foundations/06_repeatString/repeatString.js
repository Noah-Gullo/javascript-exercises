const repeatString = function(string, num) {
    let word = string;
    if(num < 0){
        return "ERROR";    
    }else if(num === 0){
        return "";
    }

    for(let i = 1; i < num; i++){
        string += word;
    }

    return string;
};

// Do not edit below this line
module.exports = repeatString;
