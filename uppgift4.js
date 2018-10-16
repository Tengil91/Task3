//Programmet tar en radie via prompt och ger mantelarea och volym (avrundat till 3 decimaler) på klotet via alert. 
//... basically samma uppgift som uppgift 3

let r = +prompt("mata in en radie så får du mantelarea och volym");
let v = Math.round(4/3*Math.PI*Math.pow(r,3)*1000)/1000;
let a = Math.round(4*Math.PI*Math.pow(r,2)*1000)/1000;

alert(`Klotet med radie ${r} har mantelarean ${a} och volymen ${v}`);
