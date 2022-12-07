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
};

var animal = "duck";
if(animal == "cow"){
    console.log("Mooooo");
}else{
    console.log("Hey! You're not a cow!");
};

//E. Driver's Ed
var driversAge = 15;
if(driversAge >= 16){
    console.log("Here are the keys!");
}else{
    console.log("Sorry, you're too young.")
};

// II. Loops
/*
REMEMBER: USE let WHEN YOU INITIALIZE YOUR FOR LOOPS!
THIS IS GOOD: for(let i=0; i<100; i++)
THIS IS NO GOOD: for(i=0; i<100; i++)
*/

// A. The basics
for(let i=0; i<=10; i++){
    console.log(i);
};

for(let i=10; i<=400; i++){
    console.log(i);
};

for(let i=12; i<4000; i+=3){
    console.log(i)
};

// B. Get even

for(let i=0; i<=100 ;i++){
    if(i%2==0){
        console.log(i);
    }
};

for(let i=0; i<=100; i++){
    if(i%2==0){
        console.log(i + "<-- is an even number");
    }
};

// C. Give me five
for (let i=0; i<=100; i++){
    if(i%5==0 && i!==0){
        console.log(`I found a ${i}. Hight five!`);
    }
};
for (let i=0; i<=100; i++){
    if(i%5==0 && i!==0){
        console.log(`I found a ${i}. High five!`);
    }else if(i%3==0 && i!==0){
        console.log(`Three is a crowd`);
    }
};
for (let i=0; i<=100; i++){
    if(i%5==0 && i%3==0){
        console.log(`I found a ${i}. High five! Three is a crowd`);
    }else if(i%5==0 && i!==0){
        console.log(`I found a ${i}. High five!`);
    }else if(i%3==0 && i!==0){
        console.log(`Three is a crowd`);
    }
};

//D. Savings account
// COMMMENTED OUT TO AVOID REDECLARING BLOCK-SCOPE VARIABLE
// 1. Write code that will save the sum of all the numbers 1-10 to a variable called bank_account
// let bank_account = 0;
// let i = 0;
// while(i<=10){
//     bank_account +=i;
//     i++;
// };
// console.log(bank_account);

// 2. You got a bonus! your pay is now boubled each week. Write code that will save the sum of all the numbers between 1-100 multiplied by 2
let bank_account = 0;
let i = 1;
while(i<=100){
    bank_account +=i*2;
    i++;
};
console.log(bank_account);

// III. Arrays & Control flow
// A. Talk about it:
/*
1. What are the things in an array called? A. They are called elements.
2. Do Arrays guarantee those things will be in order? A. No, unless we order them
3. What real-life thing could you model with an array? A. A wallet, movie/book/game colection, shopping list ect...
*/

// B. Easy Does It
// 1. Create an array that contains three quotes and store it in a variable called quotes.
const quotes = ["To be or not to be", "This is Sparta!", "What's in the box?!"];

// C. Accessing elements
const randomThings = [1, 10, "Hello", true];
// 1. How do you access the 1st element in the array?
randomThings[0];
// 2. Change the value of "Hello" to World
randomThings[2] = "World";
// 3. Check the value of the array to make sure it updated the array.
console.log(randomThings);

// D. Change values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// 1. What would you write to access the 3rd element of the array?
ourClass[2];
// 2. Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";
// 3. Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");
console.log(ourClass);


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
myArray.pop();
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
  ];
//1. What's Kristyn wearing today? using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that" + the THIRD item in Kristyn's closet "today!" to the console.
console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);
//2. Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat"
kristynsCloset.splice(6, 0, "raybans");
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
    return "Hello there, " + name;
};
console.log(printGreeting("Slimer"));

// B. printCool
const printCool = (name) => {
    return name + " is cool!";
};
console.log(printCool("Captain Reynolds"));

// C. calculateCube
const calculateCube = (number) => {
    return (number ** 3);
};
console.log(calculateCube(5));

// D. isVowel
const isVowel = (character) => {
    let ch = character.toLowerCase();
    if(ch == "a" ||ch ==  "e" ||ch ==  "i" ||ch ==  "o" ||ch ==  "u"){
        return true;
    }else{
        return false;
    }
};
console.log(isVowel("A"));
console.log(isVowel("z"));

// E. getTwoLengths
const getTwoLengths = (wrd1, wrd2) => {
    let arr = [wrd1.length, wrd2.length];
    return arr;
};
console.log(getTwoLengths("Hank", "Hippopopalous"));

// F. getMultipleLengths
const getMultipleLengths = (array) => {
    let arr = [];
    array.forEach((index) => {
        arr.push(index.length);
    })
    return arr;
};
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// G. maxOfThree
const maxOfThree = (a, b, c) => {
    if(a == b && a == c || a == b && a > c){
        return a;
    }else if(a > b && a > c){
        return a;
    }else if(b > a && b > c){
        return b;
    }else{
        return c;
    }
};
console.log(maxOfThree(6, 9, 1));
console.log(maxOfThree(6, 6, 6));
console.log(maxOfThree(9, 9, 1));
console.log(maxOfThree(9, 1, 9));
console.log(maxOfThree(6, 9, 10));
console.log(maxOfThree(10, 9, 1));

// H. printLongestWord
const printLongestWord = (array) => {
    let longest = array.reduce((a,b) => {
        if(a.length >= b.length){
            return a;
        }else{
            return b;
        }
    })
    return longest;
};
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

// V. Objects
// A Make a user object
const user = {
        name: "Dale Gribble",
        email: "daledeadbug@gmail.com",
        age: 69,
        purchased: [],
    };

// B. Update the user
user.email = "rustyshackleford@gmail.com";

// C. Adding keys and values
user.location = "Arlen, Texas";

// D. Shopaholic!
user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");
console.log(user.purchased[2]);

// E. Object-within-object
// 1. Write a friend object into you user object and give the fiend a name, age, location and purchased arry (empty)
user.friend = {
    name: "Bill Dauterive",
    age: 70,
    location: "Arlen, Texas",
    purchased: [],
};
// 2. Console.log just the friends's name
console.log(user.friend.name);
// 3. Console.log just the friend's location
console.log(user.friend.location);
// 4. CHANGE the friend's age to 55
user.friend.age = 55;
// 5. The friend has purchased "The One Ring" .push() to add to the purchased array
user.friend.purchased.push("The One Ring");
// 6. The friend has purchased "A latte" .push() to add to purchased array
user.friend.purchased.push("A latte");
// 7. Console.log just "A latte" from purchased array
console.log(user.friend.purchased[1]);
// console.log(user)
console.log(user);

// F. Loops
// 1. Write a for loop that iterates over the User's purchased array (NOT friend's), and prints each element to the console
for (let i=0; i<user.purchased.length; i++){
    console.log(user.purchased[i]);
};
// 2. Write a for loop that iterates over the Friend's purchased array, and prints each element to the console
for (let i=0; i<user.friend.purchased.length; i++){
    console.log(user.friend.purchased[i]);
};

// G. Functions can operate on objects
// 1. Write a single function updateUser that takes no parameters. When the function is run, it should:
// -increment the age by 1
// -make the user's name uppercase
const updateUser = () => {
    user.age++;
    user.name = user.name.toUpperCase();
};
updateUser();

// 2. Write a function oldAndLoud that performs the same task as updateUser, but instead of hard-coading it to only work
// on our user object, make it take a parameter person, and have it modify the object that is passed in as an arguments 
// when the function is called. Call your oldAndLoud function with user as the argument.
const oldAndLoud = (person) => {
    for (let i=0; i<user.length; i++){
        if(person == user.name){
            user.age++;
            user.name = user.name.toUpperCase();            
        }
    }
};
oldAndLoud(user)

console.log(user)

