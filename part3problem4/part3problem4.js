function ubahHuruf (sentence) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", len = sentence.length, encrypt = [];
    for (i = 0; i < len; i++) {
        for (j = 0; j < alphabet.length; j++) {
            if (sentence[i] == alphabet[j]) {
                encrypt.push(alphabet[(j + 10) % 26]);
                continue;
            }
        }
        if (sentence[i] == " ") {
            encrypt.push(" ");
        }
    }
    return encrypt.join("");
}

module.exports = ubahHuruf;