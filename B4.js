let a = prompt("nhap vao 1 chuoi");
let b = prompt("Nhap 1 ki tu bat ki");
function check(a,b) {
    let count = 0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            count++;
        }
    }
    return count;
}
console.log(`Ki tu ${b} xuat hien ${check(a,b)} lan`);