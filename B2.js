function check(array) {
  if (array.length === 0) {
      return 0;
  }
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
      if (array[i].length > max.length) {
          max = array[i];
      }
  }
  return max;
}
let array = ["abc", "abcdef", "a", "abcd", "abcdefgh"];
console.log("Phần tử có độ dài lớn nhất trong mảng là: ", check(array));