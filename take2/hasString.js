// code from PromineoTech video, with some edits by me
//
//
//
//

console.log(hasStringAtEnd('hello', 'llo')); // true // but returns false?
console.log(hasStringAtEnd('llo', 'hello')); // true // returns false
console.log(hasStringAtEnd('llod', 'hello')); // false
console.log(hasStringAtEnd('ll', 'hello')); // false
console.log(hasStringAtEnd('llo', 'hellod')); // false

// ah, so here they perform hoisting to move the function to the top...
// is that really efficient?

function hasStringAtEnd(a, b) {
	let shortest = '';
	let longest = '';
	if (a.length < b.length) {
		shortest = a;
		longest = b;
		console.log(shortest, longest);
	} else {
		shortest = b;
		longest = a;
		console.log(shortest, longest);
	}

	const indexStart = longest.length - shortest.length;
	const endOfLongest = longest.substring(indexStart + 1);
	return shortest === endOfLongest;
}
