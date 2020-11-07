const buttons = ["btn-stone", "btn-scissors", "btn-paper"]
const randomClasses = ["rock display", "scissors display", "paper display"];
const playerSelect = document.getElementById("player");
const computerSelect = document.getElementById("computer");

let score = document.getElementById("score");
let pScore = 0;
let cScore = 0;
const playerScore = document.getElementById("pscore")
const computerScore = document.getElementById("cscore")

//play rock:

document.getElementById('btn-rock').addEventListener('click', function() {

  playerSelect.className = "rock display";
  computerSelect.className = randomClasses[Math.floor(Math.random() * randomClasses.length)];

  if (playerSelect.className === computerSelect.className) {
    score.innerHTML = "Draw! play again";
  }
  else if (computerSelect.className === "scissors display") {
    //score.innerHTML = "You win!! :D";
    pScore++ ;
    playerScore.innerHTML = pScore;
    (cScore < 3 && pScore < 3) ? score.innerHTML="play again" : score.innerHTML=`GAME OVER YOU WON: ${pScore} - ${cScore}
  `}

   else {
     //score.innerHTML = "You lost :O";
     cScore++ ;
     computerScore.innerHTML = cScore;
     (cScore < 3 && pScore < 3)  ? score.innerHTML="play again" : score.innerHTML=`GAME OVER YOU LOST: ${pScore} - ${cScore}
  `
   }

});

//play scissors:

document.getElementById('btn-scissors').addEventListener('click', function() {
  playerSelect.className = "scissors display";
  computerSelect.className = randomClasses[Math.floor(Math.random() * randomClasses.length)];

  if (playerSelect.className === computerSelect.className) { score.innerHTML = "Draw! play again"
  }
  else if (computerSelect.className === "paper display") {
  //score.innerHTML = "You win!! :D"
  pScore++ ;
  playerScore.innerHTML = pScore;
   (cScore < 3 && pScore < 3) ? score.innerHTML="play again" : score.innerHTML=`GAME OVER YOU WON: ${pScore} - ${cScore}
  `
  }

   else {
    //score.innerHTML = "You lost :O";
    cScore++ ;
    computerScore.innerHTML = cScore;
     (cScore < 3 && pScore < 3)  ? score.innerHTML="play again" : score.innerHTML=`GAME OVER YOU LOST: ${pScore} - ${cScore}
  `
   }

});

//play paper:

document.getElementById('btn-paper').addEventListener('click', function() {
  playerSelect.className = "paper display";
  computerSelect.className = randomClasses[Math.floor(Math.random() * randomClasses.length)];

  if (playerSelect.className === computerSelect.className) { score.innerHTML = "draw play again"
  }
  else if (computerSelect.className === "rock display") {
    score.innerHTML = "nice :) play again";
    pScore++ ;
    playerScore.innerHTML = pScore;
    (cScore < 3 && pScore < 3) ? score.innerHTML="cool play again" : score.innerHTML=`GAME OVER YOU WON: ${pScore} - ${cScore}
  `
  }
   else {
     score.innerHTML = "oh play again";
     cScore++ ;
     computerScore.innerHTML = cScore;
     (cScore < 3 && pScore < 3)  ? score.innerHTML="ahh play again" : score.innerHTML=`GAME OVER YOU LOST: ${pScore} - ${cScore}
  `
   }

});
