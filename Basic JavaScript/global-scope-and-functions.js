// Declare the myGlobal variable below this line
let myGlobal = 10;
var oopsGlobal= 5;
function fun1() {
    // Assign 5 to oopsGlobal Here
    var oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

// Matching with the required output on My VsCode:

// console.log(result); // Result Matched!!!
