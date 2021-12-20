function convert (studentScore) {
    if (studentScore >= 80 && studentScore <= 100) {
        return "A";
    } else if (studentScore >= 65 && studentScore <= 79) {
        return "B+";
    } else if (studentScore >= 50 && studentScore <= 64) {
        return "B";
    } else if (studentScore >= 35 && studentScore <= 49) {
        return "C";
    } else if (studentScore >= 0 && studentScore <= 34) {
        return "D";
    } else {
        return "invalid";
    }
}

module.exports = convert;