function exponentiation (x, n) {
    if (n < 0) {
        return "Wrong input";
    } else {
        expNum = 1;
        for (i = 1; i <= n; i++) {
            expNum = expNum * x;
        }
        return expNum;
    }  
}

module.exports = exponentiation;