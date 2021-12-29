function nextInLine(arr, item) {
    // Only change code below this line
    
    arr.push(item);
    return arr.shift();
    // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));

console.log(nextInLine(testArr, 5));

console.log("After: " + JSON.stringify(testArr));


console.log("Before: " + JSON.stringify(testArr));

console.log(nextInLine(testArr, 1));

console.log("After: " + JSON.stringify(testArr));


console.log("Before: " + JSON.stringify(testArr));

console.log(nextInLine(testArr, 8));

console.log("After: " + JSON.stringify(testArr));


console.log("Before: " + JSON.stringify(testArr));

console.log(nextInLine(testArr, 8));

console.log("After: " + JSON.stringify(testArr));


console.log("Before: " + JSON.stringify(testArr));

console.log(nextInLine(testArr, 8));

console.log("After: " + JSON.stringify(testArr));



// Matching with the required output on My VsCode:

// console.log(result); // Result Matched!!!
