function myReplace(str, before, after) {
    const isUpperCase = before[0] === before[0].toUpperCase();

    if (isUpperCase) {
        after = after[0].toUpperCase() + after.slice(1);
    } else {
        after = after[0].toLowerCase() + after.slice(1);
    }

    return str.replace(before, after);
}
