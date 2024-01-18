function check(array,d) {
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]+array[j]==d){
                console.log(array[i],array[j]);
            }
        }
    }
}
let array = [];
let b = +prompt("Nhap kich thuoc cua mang");
for(let i=0;i<b;i++){
    let c = +prompt(`Nhap phan tu thu ${i+1}`);
    array.push(c);
}
let d = +prompt("nhap 1 so nguyen bat ki");
check(array,d);