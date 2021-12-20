function fullPrime (n) {
    let factors = 0;
    for (i = 1; i <= n; i++) {
        if (n % i == 0) {
            factors++;
        }
    }
    let str = 0, conc = "Ya";
    if (factors <= 2) {
        str = n + '';
        for (j = 0; j < str.length; j++) {
            if (str[j] == 1 || str[j] == 4 || str[j] == 6 || str[j] == 8 || str[j] == 9) {
                conc = "Tidak";
                break;
            }
        }
    } else {
        conc = "Tidak";
    }
    return conc;
}

module.exports = fullPrime;