function smallestCommons(arr) {
    let min = Math.min(arr[0], arr[1]);
    let max = Math.max(arr[0], arr[1]);

    // Greatest Common Divisor (Euclidean Algorithm)
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // Least Common Multiple
    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    let result = min;

    for (let i = min + 1; i <= max; i++) {
        result = lcm(result, i);
    }

    return result;
}
