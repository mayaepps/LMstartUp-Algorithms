/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let char_dict = {};

    for (let char of s) {
        if (char in char_dict) {
            char_dict[char] += 1;
        } else {
            char_dict[char] = 1;
        }
    }

    let sorted = [];
    let keys = Object.keys(char_dict);
    for (char of keys) {
        sorted.push(char.repeat(char_dict[char]));
    }

    return sorted.sort(function(a,b) {return b.length - a.length}).join("");
};


// Referenced sources:
//https://stackoverflow.com/questions/10630766/how-to-sort-an-array-based-on-the-length-of-each-element
//https://zellwk.com/blog/looping-through-js-objects/
//https://www.w3schools.com/jsref/jsref_push.asp
