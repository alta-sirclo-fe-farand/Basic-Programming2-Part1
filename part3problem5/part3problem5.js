function meanMedian (arrayinput) {
    let len = arrayinput.length;

    // mean
    let sum = 0;
    for (i = 0; i < len; i++) {
        sum = sum + arrayinput[i];
    }
    let mean = sum / len;

    // median
    let median = 0;
    if (len % 2 == 0) {
        median = (arrayinput[len/2-1] + arrayinput[len/2])/2;
    } else {
        median = arrayinput[(len-1)/2];
    }
    return [mean, median].join(" ");
}

module.exports = meanMedian;