let Dog = {
    type: "Luna",
    numLegs: 4,
    sayName: function() {return "This dog has " + Dog.numLegs + " legs";}
};


console.log(Dog.numLegs);
console.log(Dog.type);

console.log(Dog.sayName());



document.getElementById('demo').innerHTML = Dog.type + Dog.numLegs;
