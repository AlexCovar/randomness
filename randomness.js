//////////////////////
// GLOBAL VARIABLES //
//////////////////////

function rNum() { 
    let num = Math.floor(Math.random()*22)
    console.log(num);
}
rNum();


const alphabet = ["a","b","c","d",
"e","f","g","h","i","j","k","l","m",
"n","o","p","q","r","s","t","u","v","w",
"x","y","z"];
 var alpha = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(alpha);
 
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
var food = foods[Math.floor(Math.random() * foods.length)];
console.log(food);

const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];
var student = students[Math.floor(Math.random() * students.length)];
console.log(student);

console.log("(PART E)")

for (i = 0; i < 3; i++) {
    var student = students[Math.floor(Math.random() * students.length)];
    console.log(student);
}
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////