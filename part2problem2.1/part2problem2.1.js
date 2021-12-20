function factor (num) {
    let fac = [];

    for (i = 0; i <= num; i++) {
        if (num % i == 0) {
            fac.push(i);
        }
    }
    return fac;
}

module.exports = factor;