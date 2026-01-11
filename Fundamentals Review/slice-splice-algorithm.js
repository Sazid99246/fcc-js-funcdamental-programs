function frankenSplice(arr1, arr2, n) {
    let result = arr2.slice()

    for (let i = 0; i < arr1.length; i++) {
        result.splice(n + i, 0, arr1[i]);
    }

    return result;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1))
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));