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

function randomArray() {
  //grab random element of an array and change color.
  let randomColor = randomize[Math.floor(Math.random() * randomize.length)];
  console.log(randomColor)
    if(randomColor) {
        randomColor.style.background = "blue";
    }
}

randomArray(randomize);
