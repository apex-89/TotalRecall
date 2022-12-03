// I. Variables & Datatypes
// A. Q+A
/*
1. How do we assign a value to a variable? A. With the assignment operator.
2. How do we change the value of a variable? A. With the assignment operator.
3. How do we assign an existing variable to a new variable? A. With the assignment operator.
4. Remind me, what are declare, assign, and define? A. DECLARING is creating a data object with const/let/var statments before a name. You ASSIGN a value to the data object with an assignment operator. A declared data object that has an assigned value are defined.
5. What pseudocoding and why should you do it? A. Pseudocoding is when you break down the steps of a problem in plain english before making the actual code.
6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? A. More time should be spent on thinking about how to solve the problem, if you don't know/understand how to solve the problem no amount of coding with fix that.
*/
// B. Strings
/*
1. Create a Variable called firstVariable. A. var firstVariable,
2. Assign it the value of the string "Hello World". A. var firstVariable = "Hello World";
3. Change the value of this variable to some number. A. var firstVariable = 33;
4. Store the value of firstVariable in a new variable called secondVariable. A. var secondVariable = firstVariable;
5. Change the value of secondVariable to any string. A. var secondfVariable = "I think my brain had a meltdown";
6. What is the value of firstVariable? A. 33
7. Create a variable called yourName and set it equal to you name as a string. then, write an expression that takes the string "Hello, my name is" and the variable yourName so that it returns a new string with them concatenated. A. var yourName = "Albruce Appesh"; console.log("Hello, my name is " + yourName);
*/

// C. Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false == false)
console.log(e == 'Kevin');
console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 !== '48');

// D. The farm

var animal = "cow";
if(animal == "cow"){
    console.log("mooooo");
}

var animal = "duck";
if(animal == "cow"){
    console.log("Mooooo");
}else{
    console.log("Hey! You're not a cow!");
}

//E. Driver's Ed
var driversAge = 15;
if(driversAge >= 16){
    console.log("Here are the keys!");
}else{
    console.log("Sorry, you're too young.")
}

// II. Loops
/*
REMEMBER: USE let WHEN YOU INITIALIZE YOUR FOR LOOPS!
THIS IS GOOD: for(let i=0; i<100; i++)
THIS IS NO GOOD: for(i=0; i<100; i++)
*/

// // A. The basics
// for(let i=0; i<=10; i++){
//     console.log(i);
// }

// for(let i=10; i<=400; i++){
//     console.log(i);
// }

// for(let i=12; i<4000; i+=3){
//     console.log(i)
// }

// B. Get even
/*
for(let i=0; i<=100 ;i++){
    if(i%2==0){
        console.log(i);
    }
}
*/
for(let i=0; i<=100; i++){
    if(i%2==0){
        console.log(i + "<-- is an even number");
    }
}

// C. Give me five
for (let i=0; i<=100; i++){
    if(i%5==0 && i!==0){
        console.log(`I found a ${i}. Hight five!`);
    }
}
for (let i=0; i<=100; i++){
    if(i%5==0 && i!==0){
        console.log(`I found a ${i}. High five!`);
    }else if(i%3==0 && i!==0){
        console.log(`Three is a crowd`);
    }
}
for (let i=0; i<=100; i++){
    if(i%5==0 && i%3==0){
        console.log(`I found a ${i}. High five! Three is a crowd`);
    }else if(i%5==0 && i!==0){
        console.log(`I found a ${i}. High five!`);
    }else if(i%3==0 && i!==0){
        console.log(`Three is a crowd`);
    }
}

//D. Savings account
/*
let bank_account = 0;
let i = 0;
while(i<=10){
    bank_account = bank_account+=i;
    i++;
}console.log(bank_account);

let bank_account = 0;
let i = 0;
while(i<=10){
    bank_account = bank_account+=i;
    i++;
}console.log(bank_account);
*/
let bank_account = 0;
let i = 1;
while(i<=100){
    bank_account = bank_account+=i*2;
    i++;
}console.log(bank_account);

// III. Arrays & Control flow
// A. Talk about it:
/*
1. What are the things in an array called? A. They are called elements.
2. Do Arrays guarantee those things will be in order? A. No, unless we order them
3. What real-life thing could you model with an array? A. A wallet, movie/book/game colection, shopping list ect...
*/

// B. Easy Does It
const quotes = ["To be or not to be", "This is Sparta!", "What's in the box?!"];

// C. Accessing elements
const randomThings = [1, 10, "Hello", true];
// 1. How do you access the 1st element in the array?
console.log(randomThings[0]);
// 2. Change the value of "Hello" to World
randomThings[2] = "World";
// 3. Check the value of the array to make sure it updated the array.
console.log(randomThings);

// D. Change values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// 1. What would you write to access the 3rd element of the array?
console.log(ourClass[2]);
// 2. Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";
// 3. Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");


// E. Mix It Up
const myArray = [5, 10, 500, 20];
// 1. Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon");
myArray.push("Daenerys")
// 2. Remove the 5 from the beginning of the array.
myArray.shift();
// 3. Add the string "Bob Marley" to the beginning of the array.
myArray.unshift("Bob Marley");
// 4. Remonve the string of you choice from the end of the array.
myArray.splice(5, 5);
// 5. Reverse this array using Array.prototype.reverse(). 
myArray.reverse();
// Did you mutate the array? what does mutate mean? Did the .reverse() method return anything? A? Yes the array was mutated, meaning the array itself was change instead of returning a new array with the changes.
console.log(myArray);

// F. Biggie Smalls
let level = 65;
if(level < 100){
    console.log("litter number");
}else{
    console.log("big number");
}

// G. Monkey in the Middle
let num = 6;
if(num < 5){
    console.log("litter number");
}else if(num > 10){
    console.log("big number");
}else{
    console.log("monkey");
}

// H. What's in Your Closet?
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ]
//1. What's Kristyn wearing today? using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that" + the THIRD item in Kristyn's closet "today!" to the console.
console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);
//2. Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat"
kristynsCloset[7] = "raybans";
//3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset[5] = "stained knit hat";
//4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
console.log(thomsCloset[0][0]);
//5. In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1][1]);
//6. Access one item from Thom's accessories array.
console.log(thomsCloset[2][2]);
//7. Log a sentence about what Thom's wearing. Example:"Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]}, and ${thomsCloset[2][2]}!`);
//8. Get more specific about what kind of PJ's Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas";

// IV. Functions
// A. printGreeting
const printGreeting = (name) => {
    console.log("Hello there, " + name);
}
printGreeting("Slimer");

// B. printCool
const printCool = (name) => {
    console.log(name + " is cool!");
}
printCool("Captain Reynolds");

// C. calculateCube
const calculateCube = (number) => {
    console.log("=>", Math.pow(number, 3));
}
calculateCube(5)

// D. isVowel
const isVowel = (character) => {
    let ch = character.toLowerCase();
    if(ch == "a" ||ch ==  "e" ||ch ==  "i" ||ch ==  "o" ||ch ==  "u"){
        console.log("=> true");
    }else{
        console.log(false)
    }
}
console.log("A");
console.log("b");

// E. getTwoLengths

