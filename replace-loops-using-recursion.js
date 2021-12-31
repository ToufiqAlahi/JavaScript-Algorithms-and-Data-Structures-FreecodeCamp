function sum(arr, n) {

    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }


}

let result = sum([2, 3, 4, 5], 3)

console.log(result);