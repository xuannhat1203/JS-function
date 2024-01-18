function dem(a) {
    let count = 0;
    for (var i = 0; i < a.length; i++) {
      if (a[i] !== ' ') {
        count++;
      }
    }
    return count;
  }
let a = prompt("Nhap 1 chuoi");
console.log("Số ký tự trong chuỗi: " + dem(a));