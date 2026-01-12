function uniteUnique() {
    let result = [];

    for (const arg of arguments) {
        for (let i = 0; i < arg.length; i++) {
            if (!result.includes(arg[i])) {
                result.push(arg[i]);
            }
        }
    }
    
    return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]));
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));
