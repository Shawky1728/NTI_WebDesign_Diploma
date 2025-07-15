let x = ["ALI", 22, "ass", 12, "sss"];
let y = [];

for (let i = 0; i < x.length; i++) {
    if (x[i] +x[i] !=2*x[i]) {
        y.push(x[i]); 
    }
}

for (let i = 0; i < y.length; i++) {
    console.log(y[i]);
}
