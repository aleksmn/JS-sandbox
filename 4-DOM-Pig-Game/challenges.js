/*
ИГРА С ДОПОЛНИТЕЛЬНЫМИ ФУНКЦИЯМИ
*/

let scores, roundScore, activePlayer, gamePlaying, lastDice;

init();

document.querySelector(".btn-roll").addEventListener("click", function() {
  if(gamePlaying) { 
    // 1. Случайное число
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    // 2. Отобразить результат
    document.getElementById('dice-1').style.display = "block";
    document.getElementById('dice-2').style.display = "block";

    document.getElementById('dice-1').src = "dice-" + dice1 + ".png";
    document.getElementById('dice-2').src = "dice-" + dice2 + ".png";

    // 3. Изменить очки, если выпавший номер НЕ равен 1
    // Дополнение:
    // игрок теряет все очки, если выпадает две шестерки подряд.
/*     if (dice === 6 && lastDice === 6) {
      // Игрок теряет все очки
      scores[activePlayer] = 0;
      document.getElementById("score-" + activePlayer).textContent = '0';
      nextPlayer();
    } else */ 
    if (dice1 !== 1 && dice2 !== 1) {
      // Добавить очки за раунд
      roundScore += dice1 + dice2;
      document.getElementById("current-" + activePlayer).textContent = roundScore;
    } else {
      // Обнуление очков и переход хода
      alert('You rolled 1!');
      
      nextPlayer();
    }

    // lastDice = dice;
  }
});

// Кнопка HOLD

document.querySelector(".btn-hold").addEventListener("click", function() {
  if(gamePlaying) {
    // Изменить счет игрока
    scores[activePlayer] += roundScore;
  
    // Вывести очки на экран
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
  
    // Проверить, выиграл ли игрок
    // дополнение: ввод очков для выигрыша
    let winningScore;
    let input = document.querySelector('.final-score').value;

    if(input) {
      winningScore = input;
    } else {
      winningScore = 100;
    }

    if (scores[activePlayer] >= winningScore) {
      gamePlaying = false;
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      
      hideDices();

      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      // Обнуление очков и переход хода
      nextPlayer();
    }
  }
});

// Начать игру заново

document.querySelector(".btn-new").addEventListener("click",init);


/* * * * * Functions * * * * */

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  
  hideDices();

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

function nextPlayer() {
  // Обнуление очков
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = roundScore;

  // Переход хода
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Убрать изображение игральной кости
  hideDices()

  lastDice = '0';
}

function hideDices() {
  document.getElementById('dice-1').style.display = "none";
  document.getElementById('dice-2').style.display = "none";
}