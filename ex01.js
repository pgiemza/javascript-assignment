// use _.partial function to implement functions:

var _ = require('lodash');

var addFiveAndSixAnd = _.partial((a, b) => a.reduce(_.add, b), [5, 6]);
var power = _.partial(Math.pow, 2);
/*
first iteration more complex, before apply KISS approach :)

var powerTwo = _.partial(function () {
    return Math.pow.apply(null, _.reverse(Array.prototype.slice.call(arguments)));
}, 2);
*/
var powerTwo = _.partial((a, b) => Math.pow(b,a), 2);
var powerThree = _.partial((a) => Math.pow(a,a));

console.log(addFiveAndSixAnd(4)); //15 (adds 5 + 6 + 4 = 15)

////Evaluates Math.power(2,3) FIXME - IMHO it's a typo and should be Math.pow :)
console.log(power(3)); //8
//
////Evaluates Math.power(3,2) FIXME - IMHO it's a typo and should be Math.pow :)
console.log(powerTwo(3)); //9
//
////Evaluates Math.power(3,3) FIXME - IMHO it's a typo and should be Math.pow :)
console.log(powerThree(3)); // 27