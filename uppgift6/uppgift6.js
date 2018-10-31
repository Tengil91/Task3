//Programmet ber användaren att mata in ett tal via prompt. Fakulteten returneras via alert.

function fakultet(tal1){
    let tal2=1;
    for(let i=1;i<=tal1;i++){
        tal2*=i;
    }
    return tal2;
}
let n = +prompt("Programmet räknar ut fakulteten av det inmatade numret");
document.write(`${n}! = ${fakultet(n)}`);

