// Given array of users and helper functions sort, map, nicePrint - put your code in 'younges' function implementation so it will work as expected.

// Tip. - flow is doing same thing as compose in functional programming

var _ = require('lodash');

var users = [
  { 'user': 'barney',  'age': 36 },
  { 'user': 'fred',    'age': 40 },
  { 'user': 'pebbles', 'age': 1 }
];

/* --- helpers --- */

var sort = _.curry(function(key, collection){
  return _.sortBy(collection, key);
});

var map = _.curry(function(fn, collection){
  return _.map(collection, fn);
});

var nicePrint = function(chr){
  return chr.user + ' is ' + chr.age;
};

/* --- */

var youngest = _.flow(sort('age'), map(nicePrint), _.head);

/*
this implementation from the documentation is also fine for me :)

var youngest = (users) => {
      return _
          .chain(users)
          .sortBy('age')
          .map(function(o) {
            return o.user + ' is ' + o.age;
          })
          .head()
          .value();
}
*/
console.log( youngest(users) );
// pebbles is 1