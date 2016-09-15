/*
Given an Array of strings, use Array#reduce to create an object that contains the number of times each string occured in the array. Return the object directly (no need to console.log).

Example

    var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
    
    console.log(countWords(inputWords))
    
    // =>
    // {
    //   Apple: 2,
    //   Banana: 1,
    //   Durian: 3
    // }

*/

/*
personally I prefer this way

function countWords(words) {
    return _.countBy(words);
}
 */

function countWords(words) {
    return words.reduce((result, word) => {
        result[word] = result[word] ? result[word] + 1 : 1;
        return result;
    }, {});
}

var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];

console.log(countWords(inputWords));