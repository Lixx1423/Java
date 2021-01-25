let PlayerChar = {
    type: "Black Knight",
    numLegs: 2,
    numArms: 2,
    quote: function(){ return "Tis but a scratch."}
};

console.log(PlayerChar.numArms);
console.log(PlayerChar.numLegs);
console.log(PlayerChar.type);

PlayerChar.numArms = PlayerChar.numArms - 1;
console.log("You have "+ PlayerChar.numArms+" arms. " + PlayerChar.quote());

PlayerChar.numArms = PlayerChar.numArms - 1;
console.log("You have "+ PlayerChar.numArms+" arms. " + PlayerChar.quote());

PlayerChar.numLegs = PlayerChar.numLegs - 1;
console.log("You have "+ PlayerChar.numLegs+" arms. " + PlayerChar.quote());

PlayerChar.numLegs = PlayerChar.numLegs - 1;
console.log("You have "+ PlayerChar.numLegs+" Legs. " + PlayerChar.quote());



