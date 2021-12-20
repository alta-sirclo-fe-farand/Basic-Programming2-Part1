function factor (num) {
    let fac = [];

    for (i = num; i >= 1; i--) {
        if (num % i == 0) {
            fac.push(i);
        }
    }
    return fac;
}
module.exports = factor;