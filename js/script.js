const restart = document.querySelector(".restart");
const mindText = document.querySelector(".mind-text");
const mindLabel = document.querySelector(".mind");
const check = document.querySelector(".accept");
const main = document.querySelector(".main-section");

const audioClick = new Audio("/audio/Mountain Audio - Menu Click.mp3");
const audioWin = new Audio("/audio/huge win.wav");

let number = Math.round(1 + Math.random() * 19);
let score = document.querySelector(".score");
let highScore = document.querySelector(".highscore");

let scoreNumber = score.innerHTML;
let win = false;

check.addEventListener("click", () => {
  audioClick.play();
  if (mindLabel.value == "") {
    alert("Введите корректное число");
  }
  if (mindLabel.value !== number) {
    scoreNumber--;
    score.innerHTML = scoreNumber;
    if (scoreNumber <= 0) {
      score.innerHTML = 0;
      scoreNumber = 0;
      mindText.textContent = "Вы проиграли...";
      main.classList.add("new-2");
    } else if (mindLabel.value > number && scoreNumber > 0) {
      mindText.textContent = "Слишком много...";
    } else if (mindLabel.value < number && scoreNumber > 0) {
      mindText.textContent = "Слишком мало...";
    } else if (mindLabel.value == number && scoreNumber > 0 && win == false) {
      mindText.textContent = "Вы выиграли 💥..";
      highScore.innerHTML = scoreNumber;
      main.classList.add("new-1");
      audioWin.play();
      win = true;
    }
  }
});

restart.addEventListener("click", () => {
  number = Math.round(1 + Math.random() * 19);
  mindLabel.value = "";
  main.classList.remove("new-1");
  main.classList.remove("new-2");
  scoreNumber = 20;
  score.innerHTML = scoreNumber;
  audioClick.play();
  win = false;
});
