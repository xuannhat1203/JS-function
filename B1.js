function check(a,b,c) {
    if(a%2==0){
        console.log("a la so chan");
    }else{
        console.log("a la so le");
    }
    if(b%2==0){
        console.log("b la so chan");
    }else{
        console.log("b la so le");
    }
    if(c%2==0){
        console.log("c la so chan");
    }else{
        console.log("c la so le");
    }
}
let a =+prompt("Nhap so a");
let b =+prompt("Nhap so b");
let c =+prompt("Nhap so c");
check(a,b,c);