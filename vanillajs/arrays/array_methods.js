//* add new element at the end / returns array length
[1, 2, 3].push(4); // [1,2,3,4]

//* removes the last element / returns popped out value
[1, 2, 3].pop(); // [1,2]

//* removes the first element / returns shifted out value
[1, 2, 3].shift(); // [2,3]

//* adds a new element at beginning / resturns array length
[1, 2, 3].unshift(0); // [0,1,2,3]

//* merging arrays (or difrent value) / returns merged array
['a', 'b'].concat(['c', 'd'], 'e'); // ['a','b','c','d']

//* join elements of array in one string with seperator (default: ',')
['a', 'b', 'c'].join('-'); // a-b-c

//* adds or replace new elements on set position / returns array with deleted elements
//* parameters: 1 - position to put; 2 - elements to delete; 3.. - elements to put
['a', 'b', 'c'].splice(2, 0, 'd', 'e'); // ['a','b','c','d','e']
['a', 'b', 'c', 'd'].splice(2, 1); // ['a','b','d']

['a', 'b', 'c'].slice(); // ['a','b']

['a', 'b', 'c'].indexOf('b'); // 1

//* returns true if array includes an element
['a', 'b', 'c'].includes('c'); // true

//* finding first element when condition is true
[3, 5, 6, 8].find((n) => n % 2 === 0); // 6

[4, 6, 7, 9].findIndex((n) => n % 2 !== 0); // 3

//* modify evry element in array
[3, 4, 8, 6].map((n) => n * 2); // [6,8,16,12]

//* returns an array with elements pass the condition
[1, 4, 7, 8].filter((n) => n % 2 === 0); // [4,8]

//* returns first arg (total) as a result of the internal function
[2, 4, 3, 7].reduce((total, num) => total + num); // 16

//* returns true if every elements pass condition
[2, 3, 4, 5].every((x) => x < 6); // true

//* returns true if at least one element pass condition
[3, 5, 6, 8].some((n) => n > 6); // true

//* reverses the order of the elements
[1, 2, 3, 4].reverse(); // [4,3,2,1]

//* returns element on position
//// [3, 5, 7, 9].at(-2); // 7
