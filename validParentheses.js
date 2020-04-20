/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let openChar = []
    for (let char of s) {
        if (char === "{" || char === "(" || char === "[") {
            openChar.unshift(char)
        } else {
            if ((openChar[0] === "(" && char === ")") ||
               (openChar[0] === "{" && char === "}" ) ||
               (openChar[0] === "[" && char === "]")) {
                openChar.shift()
            } else {
                return false
            }
        }
    }
    if (openChar.length !== 0) {
        return false
    }
    return true
};
