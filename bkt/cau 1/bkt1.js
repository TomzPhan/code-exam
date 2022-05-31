console.log("Hello World!");
let a = document.querySelector("#a").value;
let b = document.querySelector("#b").value;

if (a < 0 || b < 0) {
    alert (`{a} và {b} không phải là số nguyên tố !`)
} else if (a > b) {
    alert (`khoảng số không phù hợp vì ${a} >${b}`)
} else {
    for ( i=a; i<b; i+1) {
        
    }
}