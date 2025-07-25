const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
console.log(findLongestWord(avengers));

function findLongestWord(stringList) {
  // Completar código
  let longestWord = "";
    for (let i = 0; i < stringList.length; i++) {
        if (stringList[i].length > longestWord.length) {
        longestWord = stringList[i];
        }
    }
    return longestWord;
}