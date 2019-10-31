function f1() {
    console.log("Hello JS");
}

function f2(a, b) {
    let c = a + b;

    return (d) => c + d;
}

f1();
console.log(f2(3, 5)(8));

function beasting() {  
    console.log("I f**k like a BEAST");
}
