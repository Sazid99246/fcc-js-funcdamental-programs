function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function sumPrimes(num) {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }

    return sum;
}

console.log(sumPrimes(10));
console.log(sumPrimes(5));
console.log(sumPrimes(2));
console.log(sumPrimes(0));
console.log(sumPrimes(977));

