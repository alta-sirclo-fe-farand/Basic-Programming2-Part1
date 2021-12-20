function playWithAsterisk (n) {
    let ast = [];
    for (j = 0; j < n; j++) {
        for (i = -1*(n-1); i <= (n-1); i++) {
            if (j % 2 == 0) {
                if (Math.abs(i) == j || (Math.abs(i) <= j && Math.abs(i) % 2 == 0)) {
                    ast.push("*");
                } else {
                    ast.push(" ");
                }
            } else {
                if (Math.abs(i) == j || (Math.abs(i) <= j && Math.abs(i) % 2 != 0)) {
                    ast.push("*");
                } else {
                    ast.push(" ");
                }
            }
        }
        if (!(j == n-1)) {
            ast.push("\n");
        }
    }
    return ast.join("");
}

module.exports = playWithAsterisk;