"use strict";

// get the all boxes
let boxes = document.querySelectorAll(".square");
let mole = document.querySelectorAll(".mole");
let timeLeft = document.querySelectorAll("#time");
let score = document.querySelectorAll("#score");

let result = 0;
let currentTime = timeLeft[0].textContent;
let hit;

function randomSquare() {
  boxes.forEach((box) => {
    box.classList.remove("mole");
  });
  let random = boxes[Math.floor(Math.random() * 9)];
  random.classList.add("mole");

  hit = random.id;
}

boxes.forEach((id) => {
  id.addEventListener("mouseup", () => {
    if (id.id === hit) {
      result += 1;
      score[0].textContent = result;
    }
  });
});

function moveMole() {
  let timerId = null;
  timerId = setInterval(randomSquare, 1000);
}

function countDown() {
  currentTime--;
  timeLeft[0].textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(timerId);
    alert("Game Over! Score is: " + result);
  }
}

let timerId = setInterval(countDown, 1000);

moveMole();
