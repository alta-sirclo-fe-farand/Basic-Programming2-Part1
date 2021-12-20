function palindrome (string) {
    pal_status = true;
    len = string.length;
    if (len % 2 == 0) {
        for (i = 0; i <= (len/2)-1; i++) {
            if (string[i] != string[len-(i+1)]) {
                pal_status = false;
                break;
            }
        }
    } else {
        for (i = 0; i < ((len-1)/2)-1; i++) {
            if (string[i] != string[len-(i+1)]) {
                pal_status = false;
                break; 
            }
        }       
    }
    return pal_status;
}

module.exports = palindrome;