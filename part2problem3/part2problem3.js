function primeNumber (number) {
    for (i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return "Bukan Bilangan Prima";
        }
    }
    return "Bilangan Prima";
}

module.exports = primeNumber;