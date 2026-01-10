function truncateString(text, number) {
    if (text.length > number) {
        return text.substring(0, number) + "...";
    }
    else {
        return text;
    }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));

