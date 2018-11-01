//Programmet ber användaren att mata in ett tal via prompt. Fakulteten returneras via write..

function fakultet(tal1){
    let tal2=1;
    for(let i=1;i<=tal1;i++){
        tal2*=i;
    }
    return tal2;
}
let n = Math.floor(+prompt("Programmet räknar ut fakulteten av det inmatade numret (som är mindre än 170"));
if(n>=171||n<0){
    document.write(":(");
} else {
    document.write(`${n}! = ${fakultet(n)}`);
}

