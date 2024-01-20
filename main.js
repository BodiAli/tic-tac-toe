function createPlayer (name, marker){
      
  return {name, marker}
}



  const Gameboard = {
    gameBoard: [],
    init: function(){
      this.cacheDom()
      this.bindEvents()
    },
    cacheDom: function(){
      this.cells = document.querySelectorAll(".cells");
      this.startButton = document.getElementById("start")
    },
    bindEvents: function(){
      this.cells.forEach(function(element){
        element.addEventListener("click", this.addMarker.bind(this))
      }, this)
    },
    addGameFlow: function(){
    },
    render: function(ev){
      if (ev.target.textContent === ""){
      ev.target.textContent = this.player.marker;
      this.generateComputerChoice(ev)
    }
      
    },
    addMarker: function(ev){
    this.render(ev)
    this.gameBoard[0] = this.cells[0].textContent
      
    this.gameBoard[1] = this.cells[1].textContent

    this.gameBoard[2] = this.cells[2].textContent

    this.gameBoard[3] = this.cells[3].textContent

    this.gameBoard[4] = this.cells[4].textContent

    this.gameBoard[5] = this.cells[5].textContent

    this.gameBoard[6] = this.cells[6].textContent

    this.gameBoard[7] = this.cells[7].textContent

    this.gameBoard[8] = this.cells[8].textContent
    this.checkWin(ev)

    },
   player: createPlayer("Bodi", "X"),
   computerPlayer: createPlayer("Computer", "O"),

   generateComputerChoice: function(ev){
     for (let i = 0; i < 10; i++){
      //  let choice =  Math.floor(Math.random() * 9);
      //  if (this.cells[choice].textContent === "X" || this.cells[choice].textContent === "O"){
      //    continue;
      //   } else { 
      //    this.cells[choice].textContent = this.computerPlayer.marker
      //    break;
      //  }
      if (this.gameBoard[i] === "X" || this.gameBoard[i] === "O"){
        continue;
      } else {
        this.gameBoard[2] = "O"
        break;
      }
        
      }
    },
   checkWin: function(ev){
    if(
      this.gameBoard[0] === "X" && this.gameBoard[1] === "X" && this.gameBoard[2] === "X" ||
      this.gameBoard[0] === "X" && this.gameBoard[3] === "X" && this.gameBoard[6] === "X" ||
      this.gameBoard[0] === "X" && this.gameBoard[4] === "X" && this.gameBoard[8] === "X" ||
      this.gameBoard[1] === "X" && this.gameBoard[4] === "X" && this.gameBoard[7] === "X" ||
      this.gameBoard[2] === "X" && this.gameBoard[4] === "X" && this.gameBoard[6] === "X" ||
      this.gameBoard[2] === "X" && this.gameBoard[5] === "X" && this.gameBoard[8] === "X" ||
      this.gameBoard[6] === "X" && this.gameBoard[7] === "X" && this.gameBoard[8] === "X" ||
      this.gameBoard[3] === "X" && this.gameBoard[4] === "X" && this.gameBoard[5] === "X"
    ){
      console.log("You Won")
      this.cells.forEach(this.stopBoardClick)
    } else if (
      this.gameBoard[0] === "O" && this.gameBoard[1] === "O" && this.gameBoard[2] === "O" ||
      this.gameBoard[0] === "O" && this.gameBoard[3] === "O" && this.gameBoard[6] === "O" ||
      this.gameBoard[0] === "O" && this.gameBoard[4] === "O" && this.gameBoard[8] === "O" ||
      this.gameBoard[1] === "O" && this.gameBoard[4] === "O" && this.gameBoard[7] === "O" ||
      this.gameBoard[2] === "O" && this.gameBoard[4] === "O" && this.gameBoard[6] === "O" ||
      this.gameBoard[2] === "O" && this.gameBoard[5] === "O" && this.gameBoard[8] === "O" ||
      this.gameBoard[6] === "O" && this.gameBoard[7] === "O" && this.gameBoard[8] === "O" ||
      this.gameBoard[3] === "O" && this.gameBoard[4] === "O" && this.gameBoard[5] === "O"

    ) {
      console.log("Computer Won")
      this.cells.forEach(this.stopBoardClick)
    }
   },
   stopBoardClick: function(element){
    element.classList.add("canceled")
   }
  }
Gameboard.init()


console.log(Gameboard)

const arr = ["X","O", "X", "O", "X", "O"];

