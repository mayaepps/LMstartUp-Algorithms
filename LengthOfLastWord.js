/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    return s.trim().length - s.trim().lastIndexOf(' ')-1;
};
