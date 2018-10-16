//Programmet skapar objektet Person baserat på strängarna name, mail, phone och adress.
//Adress är ett object som innehåller street, postcode och city.
//Person har metod som skriver ut 

function Adress(street, postcode, city){
    this.street = street;
    this.postcode = postcode;
    this.city = city;
}

function Person(name, mail, phone, adress){
    this.name = name;
    this.mail = mail;
    this.phone = phone;
    this.adress = adress;

    this.print = function(){
        console.log(`${this.name} \n\n${this.adress.street} \n${this.adress.postcode} ${this.adress.city}`);
    }
}
//sparar telefonnummret som strängar annars konverterar JS nummer med 0 som första nummer till bas 8. Coolt.
let niklas = new Person("Niklas Silfverhielm", "exempel@gmail.com", "0707070707", new Adress("gatan 4", "112 61", "Stockholm"));
let mohamed = new Person("Mohamed någonting", "exempel2@gmail.com", "0727072707", new Adress("andragatan 3", "112 61", "Stockholm"));
niklas.print();
mohamed.print();
console.log(niklas.mail + " " + niklas.phone);
console.log(mohamed.mail + " " + mohamed.phone);