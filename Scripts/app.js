// main javascript document

"use strict";

var username = "Tara";
var age = 23;
var isHungry = true;

// arrays

var usernames = ["Mike", "Rich", "Anju", "Margot"];
console.log("Before the push", + usernames);

// add and element to the bottom of the array
usernames.push("Tom");
console.log("After the push", + usernames);

// remove and element to the bottom of the array
usernames.pop();
console.log("After the pop", + usernames);

/* ***** This is another (longer) way to create an array *****
var usernames = [];
// var usernames = new Array();

usernames[0] = "Mike";
usernames[1] = "Rich";
usernames[2] = "Anju";
usernames[3] = "Margot";

console.log(usernames);
*/