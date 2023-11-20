//your JS code here. If required.
function mapLetters(word) {
  const letterMap = {};

  // Loop through each character in the word
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    // Check if the letter is already in the map
    if (letterMap.hasOwnProperty(letter)) {
      letterMap[letter].push(i);
    } else {
      // If not, create a new array with the current index
      letterMap[letter] = [i];
    }
  }

  return letterMap;
  return myObject;
}