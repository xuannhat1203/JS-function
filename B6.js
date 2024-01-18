let string = prompt("Nhập một chuỗi bất kỳ");
function check(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        if (i === 0 && string[i] >= 'a' && string[i] <= 'z') {
            result += string[i].toUpperCase();
        } else if (string[i] === ' ') {
            result += ' ';
            if (string[i + 1] >= 'a' && string[i + 1] <= 'z') {
                result += string[i + 1].toUpperCase();
                i++;
            }
        } else {
            result += string[i];
        }
    }
    return result;
}
console.log(check(string));