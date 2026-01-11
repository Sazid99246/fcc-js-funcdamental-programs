function mutation(arr) {
    const firstWord = arr[0].toLowerCase();
    const secondWord = arr[1].toLowerCase();

    for (let i = 0; i < secondWord.length; i++) {
        const char = secondWord[i];
        
        if (firstWord.indexOf(char) === -1) {
            return false;
        }
    }
    return true;
}
