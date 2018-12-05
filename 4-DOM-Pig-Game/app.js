/*
ПРАВИЛА ИГРЫ

- Игра для двух игроков
- Каждый ход игрок бросает игральных кубик сколько угодно раз. Результат добаляется к очкам за РАУНД
- ЕСЛИ выпадает 1, очки за РАУНД теряются
- Игрок может выбрать "Hold", что значит очки за раунд добавляются к общей сумме очков для данного игрока, ход переходит другому
- Игрок, первым набравший 100 очков побеждает в игре.
*/

let scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector(".btn-roll").addEventListener("click", function() {
  if(gamePlaying) { 
    // 1. Случайное число
    let dice = Math.floor(Math.random() * 6) + 1;

    // 2. Отобразить результат
    let diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    // 3. Изменить очки, если выпавший номер НЕ равен 1
    if (dice !== 1) {
      // Добавить очки за раунд
      roundScore += dice;
      document.getElementById("current-" + activePlayer).textContent = roundScore;
    } else {
      // Обнуление очков и переход хода
      nextPlayer();
    }
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
    if (scores[activePlayer] >= 100) {
      gamePlaying = false;
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      document.querySelector(".dice").style.display = "none";
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
  
  document.querySelector(".dice").style.display = "none";

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
  document.querySelector(".dice").style.display = "none";
}
