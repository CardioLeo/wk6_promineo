console.log(hasStringAtEnd('hello', 'llo')); 
console.log(hasStringAtEnd('llo', 'hello')); 
console.log(hasStringAtEnd('llod', 'hello'));
console.log(hasStringAtEnd('ll', 'hello'));
console.log(hasStrongAtEnd('llo', 'hellod'));

function hasStringAtEnd(a, b) {
        let shortest = '';
        let longest = '';
        if (a.length < b.length) {
                shortest = a;
                longest = b;
        } else {
                shortest = b;
                longest = a;
        }

        const indexStart = longest.length - shortest.length;
        const endOfLongest = longest.substring(indexStart + 1);
        return shortest === endOfLongest;
}