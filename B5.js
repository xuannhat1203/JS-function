let a = [];
let b = +prompt("Nhap so luong chuoi trong mang");
for(let i=0;i<b;i++){
    let c = prompt(`Nhap chuoi thu ${i+1}`);
    a.push(c);
}
let d = prompt("Nhap chuoi muon tim kiem");
function check(a,d) {
    for(let i=0;i<a.length;i++){
        if(a[i]==d){
            console.log("co chuoi dang tim kiem trong mang");
            console.log(a[i]);
        }
    }
}
check(a,d);