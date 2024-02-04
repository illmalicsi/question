// script.js
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const audio = document.getElementById("myAudio");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yaaaaay, I love you so much!";
  gif.src = "https://media.giphy.com/media/FTGah7Mx3ss04PcasF/giphy.gif";

  audio.play();
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

