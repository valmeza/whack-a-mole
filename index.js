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

// score

let boxes = [one, two, three, four, five, six, seven, eight, nine];
let randomBox = boxes[Math.floor(Math.random() * boxes.length)];

boxes.forEach(function() {
    randomBox.style.background = "blue";
});


