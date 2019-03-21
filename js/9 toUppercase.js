function firstAndLastToUpper(str) {
    var firstChar = word.charCodeAt(0);
    if (firstChar >= 97 && firstChar <= 122) {
        return String.fromCharCode(firstChar - 32) + word.substr(1);
    }
    return word;
}
console.log(firstAndLastToUpper('abc'));