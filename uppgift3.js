//Programmet tar en radie via prompt och ger omkrets och area (avrundat till 3 decimaler) på cirkeln via alert. 

let r = +prompt("mata in en radie så får du omkrets och area");
let a = Math.round(Math.PI*Math.pow(r,2)*1000)/1000;
let o = Math.round(Math.PI*r*2*1000)/1000;

alert(`Cirkeln med radie ${r} har arean ${a} och omkretsen ${o}`);
