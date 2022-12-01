//A. Q+A
/*
1. How do we assign a value to a variable? A. With the assignment operator.
2. How do we change the value of a variable? A. With the assignment operator.
3. How do we assign an existing variable to a new variable? A. With the assignment operator.
4. Remind me, what are declare, assign, and define? A. DECLARING is creating a data object with const/let/var statments before a name. You ASSIGN a value to the data object with an assignment operator. A declared data object that has an assigned value are defined.
5. What pseudocoding and why should you do it? A. Pseudocoding is when you break down the steps of a problem in plain english before making the actual code.
6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? A. More time should be spent on thinking about how to solve the problem, if you don't know/understand how to solve the problem no amount of coding with fix that.
*/
//B. Strings
/*
1. Create a Variable called firstVariable. A. var firstVariable,
2. Assign it the value of the string "Hello World". A. var firstVariable = "Hello World";
3. Change the value of this variable to some number. A. var firstVariable = 33;
4. Store the value of firstVariable in a new variable called secondVariable. A. var secondVariable = firstVariable;
5. Change the value of secondVariable to any string. A. var secondfVariable = "I think my brain had a meltdown";
6. What is the value of firstVariable? A. 33
7. Create a variable called yourName and set it equal to you name as a string. then, write an expression that takes the string "Hello, my name is" and the variable yourName so that it returns a new string with them concatenated. A. var yourName = "Albruce Appesh"; console.log("Hello, my name is " + yourName);
*/

//C. Booleans
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

//D. The farm
/*
var animal = "cow";
if(animal == "cow"){
    console.log("mooooo");
}
*/
var animal = "duck";
if(animal == "cow"){
    console.log("Hey! You're not a cow");
}
