function translatePigLatin(str) {
  // Match the first vowel in the string
  const vowelRegex = /[aeiou]/;

  // If the word starts with a vowel, add "way"
  if (vowelRegex.test(str[0])) {
    return str + "way";
  }

  // Find the index of the first vowel
  const firstVowelIndex = str.search(vowelRegex);

  // If no vowels are found, add "ay" at the end
  if (firstVowelIndex === -1) {
    return str + "ay";
  }

  // Move the consonant cluster to the end and add "ay"
  return (
    str.slice(firstVowelIndex) +
    str.slice(0, firstVowelIndex) +
    "ay"
  );
}
