let firstName = "Peter";
let lastName = "Rigii";
let age = 35;
let isMarried = true;

function details(firstName, lastName, age, isMarried){
    console.log("My name is "+ firstName + " " + lastName + ", " + "I am " + 
    age + " " + "years old and I'm " + isMarried + " "+ "with a wife.");
}


details(firstName, lastName, age, isMarried);

const interestRate = 0.2;
 
function compoundInterest(principal, interestRate, time){
    console.log(principal*interestRate*time)
}

compoundInterest(39888, interestRate, 4)