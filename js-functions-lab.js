function minusOne(num) {
  return num - 1;
}
console.log(minusOne(3));
// minusOne(10); // 9
// minusOne(100); // 99
console.log(minusOne(Infinity)); // Infinity

function makeSentence(string1, string2, string3) {
  return `Oh boy, do ${string1} ${string2} ${string3} or what?`;
}
console.log(makeSentence("I", "want", "chimichangas"));

// function getLastElement(arr) {
//   return arr.slice(-1);
// }
// const arr1 = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// console.log(getLastElement([1, 2, 3, 4, 5, 6]));
// console.log(getLastElement(arr1));

function getLastElement(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    return arr[arr.length - 1];
  }
}
console.log(getLastElement([1, 2, 3, 4, 5, 6]));

// Blake Zaide, Jeffrey Lim, Nicolas Davis, Jacqueline Barragan-Lomeli
