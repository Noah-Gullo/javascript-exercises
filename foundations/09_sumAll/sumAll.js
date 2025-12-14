const sumAll = function(a, b) {
    if (a % 10 != 0 || b % 10 != 0){
        return "ERROR";
    }

    let small = a > b ? b : a;
    let big = a > b? a : b;
    let sum = 0

    for(let i = small; i < big; i++){
        sum += i;
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
