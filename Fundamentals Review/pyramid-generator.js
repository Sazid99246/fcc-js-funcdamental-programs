function pyramid(char, rows, inverted) {
    let result = "\n";
    
    for (let i = 0; i < rows; i++) {
        let rowIndex = inverted ? i : rows - 1 - i;

        let spaces = " ".repeat(rowIndex);
        let pattern = char.repeat(2 * (rows - 1 - rowIndex) + 1);

        result += spaces + pattern + "\n";
    }

    return result;
}

console.log(pyramid("o", 4, false));
console.log(pyramid("o", 4, true));
