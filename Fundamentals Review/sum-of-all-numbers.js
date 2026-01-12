function sumAll([n, m]) {
    if (n > m) {
        let temp = n;
        n = m;
        m = temp;
    }

    let sum = 0;

    for (let i = n; i <= m; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));
