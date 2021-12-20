function cetakTablePerkalian (n) {
    let mult = [];
    for (j = 1; j <= n; j++) {
        for (i = 1; i <= n; i++) {
            mult.push(i * j);
            if (i == n) {
                mult.push("\n");
            } else if (i * j < 10) {
                mult.push(" ");
                mult.push(" ");
            } else if (i * j >= 10) {
                mult.push(" ");
            }
        }
    }
    mult.pop()
    return mult.join("");
}

module.exports = cetakTablePerkalian;
