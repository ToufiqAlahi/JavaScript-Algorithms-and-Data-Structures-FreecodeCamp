// Only change code below this line
function countdown(n) {
    return n < 1 ? [] : [n, ...countdown(n - 1)];
}
  // Only change code above this line