const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  // Completar
  let total = 0;
    for (let i = 0; i < numberList.length; i++) {
        total += numberList[i];
    }
    return total / numberList.length;
}
console.log(average(numbers));
