const fibonacci = function(num) {
    if(typeof num !== "number"){
        parseInt(num);
    }

    if (num < 0){
        return "OOPS";
    }else if(num === 0 || num === "0"){
        return 0;
    }


    let previous = 1;
    let beforePrevious = 0;

    for(let i = 2; i <= num; i++){
        let curr = previous + beforePrevious;
        beforePrevious = previous;
        previous = curr;
    }

    return previous;
};

// Do not edit below this line
module.exports = fibonacci;
