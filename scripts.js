function f1() {
    console.log("Hello JS");
}

function f2(a, b) {
    let c = a + b;

    return (d) => c + d;
}

f1();