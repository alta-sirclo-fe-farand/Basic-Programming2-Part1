function drawXYZ (n) {
    let xyz = [];
    for (j = 0; j < n; j++) {
        for (i = 1; i <= n; i++) {
            if ((n * j + i) % 3 == 0) {
                xyz.push("X");
            } else if ((n * j + i) % 2 != 0) {
                xyz.push("Y");
            } else {
                xyz.push("Z");
            }
            if (!(i == n)) {
                xyz.push(" ");
            }
        }
        if (!(j == n-1)) {
            xyz.push("\n");
        }
    }
    return xyz.join("");
}

module.exports = drawXYZ;