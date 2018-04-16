var circle = '<svg><circle cx="72" cy="72" r="69" stroke="blue" fill="transparent" stroke-width="3"/></svg>',
  ex = '<svg><line x1="8" y1="8" x2="138" y2="138" stroke="blue" stroke-width="3" /><line x1="138" y1="8" x2="8" y2="138" stroke="blue" stroke-width="3" /></svg>',
  gameStyle = ["computadora", "humans"],
  gameShapes = ["circle", "ex"]
  playerChoice = 0,
  gameType = document.getElementsByClassName("game-type"),
  shapeChoice = document.getElementsByClassName("shape-choice"),
  cellChoice = document.getElementsByClassName("cell"),
  playerOneShape = 0,
  playerTwoShape = 1,
  computerShape = 1,
  playerTurn = 0,
  choice = window[gameShapes[playerTurn]],
  winningCombos = ["ABC","DEF","GHI","ADG","BEH","CFI","AEI","CEG"],
  playerCombos = ["",""]


function choiceTransition() {
  document.getElementById("game-choice").classList.add("no-opacity")
  document.getElementById("game-piece-choice").classList.remove("no-opacity")
  setTimeout(
    function() {
      document.getElementById("game-choice").classList.add("hidden")
      document.getElementById("game-piece-choice").classList.remove("hidden")
    }, 250)

}

function shapeTransition() {
  document.getElementById("game-piece-choice").classList.add("no-opacity")
  document.getElementById("gameboard").classList.remove("no-opacity")
  setTimeout(
    function() {
      document.getElementById("game-piece-choice").classList.add("hidden")
      document.getElementById("gameboard").classList.remove("hidden")
    }, 250)

}

for (let x of gameType) {
  x.addEventListener("click",
    function() {
      if (this.getAttribute("id") === "humans") {
        playerChoice = 1;
      } else {
        playerChoice = 0;
      }
      choiceTransition()
    })
}

for (let x of shapeChoice) {
  x.addEventListener("click",
    function() {
      if (this.getAttribute("id") === "circle") {
        playerOneShape = 0;
        playerTwoShape = 1;
        computerShape = 1;
      } else {
        playerOneShape = 1;
        playerTwoShape = 0;
        computerShape = 0;
      }
      playerTurn = playerOneShape;
      choice = window[gameShapes[playerTurn]];
      shapeTransition();
    })
}

for (let x of cellChoice) {
  x.addEventListener("click",
    function() {
      if(this.getAttribute("data-available")==="true"){
        this.setAttribute("data-available","false");
        playerCombos[playerTurn]+=this.getAttribute("data-point");
        this.innerHTML = choice;
        (playerTurn === 0) ? playerTurn = 1 : playerTurn = 0;
        choice = window[gameShapes[playerTurn]];
    }})
}



for (let x of winningCombos){
	for (let y in x){
		if(playerCombos[playerTurn].includes(x[0]) &&
    playerCombos[playerTurn].includes(x[1]) &&
      playerCombos[playerTurn].includes(x[2])){
			console.log(x)
		}
	}
}
