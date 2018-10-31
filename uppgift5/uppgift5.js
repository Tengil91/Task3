//randomDice returnerar 1000 slumpmässiga tärningskast (1-6) i en array.
function randomDice(){
    let dices = [];
    for(let i=0;i<1000;i++){
        dices.push(Math.ceil(Math.random()*6));
    }
    return dices;
}

//print skriver ut en array som innehåller förekomsten av 1or, 2or... och 6or som fås från randomDice.

function print(){
    let dices = randomDice();
    let numbers = [0,0,0,0,0,0];
    for(let i=0;i<dices.length;i++){
        numbers[dices[i]-1]++;
    }
    console.log("totalt antal: " + (numbers[0]+numbers[1]+numbers[2]+numbers[3]+numbers[4]+numbers[5]));
    console.log(numbers);
}

print();