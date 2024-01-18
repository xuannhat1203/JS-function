function check(stringOne,stringTwo) {
    for(let i=0;i<stringOne.length;i++){
        let char = stringTwo.charAt(i);
        if(stringOne.indexOf(char)==-1){
            return false;
        }
    }
    return true;
}
let stringOne ="abcdefghiklm";
let stringTwo = prompt("nhap chuoi cua ban");
console.log(check(stringOne,stringTwo));
