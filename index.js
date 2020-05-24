"use strict";
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");

let randomize = [one, two, three, four, five, six, seven, eight, nine]

randomArray(randomize);

function randomArray(array) {
  //grab random element of an array and change color.
  array = randomize[Math.floor(Math.random() * randomize.length)];
  console.log(array)
    if(array) {
        array.style.background = "blue";
    }
}


