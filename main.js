function createPlayer (name, marker){
      
  return {name, marker}
}



  const Gameboard = {
    gameBoard: [],
    winningScore: 0,
    won: false,
    init: function(){
      this.cacheDom()
      this.bindEvents()
      this.playerVsComputer()
     
    },
    cacheDom: function(){
      this.cells = document.querySelectorAll(".cells");
      this.startButton = document.getElementById("start")
      this.playerVsComputerButton = document.getElementById("ai")
      this.xSelector = document.getElementById("X")
      this.oSelector = document.getElementById("O")
    },
    bindEvents: function(){
      this.cells.forEach(function(element){
        element.addEventListener("click", this.addMarker.bind(this))
      }, this);
      this.startButton.addEventListener("click", this.startGame.bind(this))
    },
    
    render: function(ev){
      this.generateComputerChoice(ev)
      

      for (let i = 0; i < 10; i++){
        if (this.gameBoard[i] === "X" || this.gameBoard[i] === "O"){
          continue;
        } else {
          this.cells[0].textContent = this.gameBoard[0]
          this.cells[1].textContent = this.gameBoard[1]
          this.cells[2].textContent = this.gameBoard[2]
          this.cells[3].textContent = this.gameBoard[3]
          this.cells[4].textContent = this.gameBoard[4]
          this.cells[5].textContent = this.gameBoard[5]
          this.cells[6].textContent = this.gameBoard[6]
          this.cells[7].textContent = this.gameBoard[7]
          this.cells[8].textContent = this.gameBoard[8]
        }
      }
      this.checkWin(ev)

    },
    addMarker: function(ev){
    this.gameBoard[0] = this.cells[0].textContent
      
    this.gameBoard[1] = this.cells[1].textContent

    this.gameBoard[2] = this.cells[2].textContent

    this.gameBoard[3] = this.cells[3].textContent

    this.gameBoard[4] = this.cells[4].textContent

    this.gameBoard[5] = this.cells[5].textContent

    this.gameBoard[6] = this.cells[6].textContent

    this.gameBoard[7] = this.cells[7].textContent

    this.gameBoard[8] = this.cells[8].textContent
   
    if (ev.target.textContent === ""){
      this.gameBoard[ev.target.classList[0]] = this.player.marker 
    }

    this.render(ev)

    },
  
   

   generateComputerChoice: function(ev){
    if(ev.target.textContent === ""){
      if(this.computer.marker === "O"){
        if (this.gameBoard[0] === "X" && this.gameBoard[1] === "X" && this.gameBoard[2] === ""){
          this.gameBoard[2] = "O"
        } else if (this.gameBoard[0] === "X" && this.gameBoard[3] === "X" && this.gameBoard[6] === ""){
          this.gameBoard[6] = "O"
        } else if (this.gameBoard[0] === "X" && this.gameBoard[4] === "X" && this.gameBoard[8] === ""){
          this.gameBoard[8] = "O"
        } else if (this.gameBoard[1] === "X" && this.gameBoard[4] === "X" && this.gameBoard[7] === ""){
          this.gameBoard[7] = "O"
        } else if (this.gameBoard[2] === "X" && this.gameBoard[4] === "X" && this.gameBoard[6] === ""){
          this.gameBoard[6] = "O"
        } else if (this.gameBoard[2] === "X" && this.gameBoard[5] === "X" && this.gameBoard[8] === ""){
          this.gameBoard[8] = "O"
        } else if (this.gameBoard[3] === "X" && this.gameBoard[4] === "X" && this.gameBoard[5] === ""){
          this.gameBoard[5] = "O"
        } else if (this.gameBoard[6] === "X" && this.gameBoard[7] === "X" && this.gameBoard[8] === ""){
          this.gameBoard[8] = "O"
        } else if (this.gameBoard[4] === "X" && this.gameBoard[5] === "X" && this.gameBoard[3] === ""){
          this.gameBoard[3] = "O"
        } else if (this.gameBoard[6] === "X" && this.gameBoard[4] === "X" && this.gameBoard[2] === ""){
          this.gameBoard[2] = "O"
        } else {
          for (let i = 0; i < 9; i++){
              let choice =  Math.floor(Math.random() * 9);
              if(this.gameBoard[choice] === "X" || this.gameBoard[choice] === "O"){
                continue
                
              }else if (this.gameBoard[choice] === ""){
                this.gameBoard[choice] = "O"
                break
              }
            }
         }
      }
      else if (this.computer.marker === "X"){
        if (this.gameBoard[0] === "X" && this.gameBoard[1] === "X" && this.gameBoard[2] === ""){
          this.gameBoard[2] = "X"
        } else if (this.gameBoard[0] === "X" && this.gameBoard[3] === "X" && this.gameBoard[6] === ""){
          this.gameBoard[6] = "X"
        } else if (this.gameBoard[0] === "X" && this.gameBoard[4] === "X" && this.gameBoard[8] === ""){
          this.gameBoard[8] = "X"
        } else if (this.gameBoard[1] === "X" && this.gameBoard[4] === "X" && this.gameBoard[7] === ""){
          this.gameBoard[7] = "X"
        } else if (this.gameBoard[2] === "X" && this.gameBoard[4] === "X" && this.gameBoard[6] === ""){
          this.gameBoard[6] = "X"
        } else if (this.gameBoard[2] === "X" && this.gameBoard[5] === "X" && this.gameBoard[8] === ""){
          this.gameBoard[8] = "X"
        } else if (this.gameBoard[3] === "X" && this.gameBoard[4] === "X" && this.gameBoard[5] === ""){
          this.gameBoard[5] = "X"
        } else if (this.gameBoard[6] === "X" && this.gameBoard[7] === "X" && this.gameBoard[8] === ""){
          this.gameBoard[8] = "X"
        } else if (this.gameBoard[4] === "X" && this.gameBoard[5] === "X" && this.gameBoard[3] === ""){
          this.gameBoard[3] = "X"
        } else if (this.gameBoard[6] === "X" && this.gameBoard[4] === "X" && this.gameBoard[2] === ""){
          this.gameBoard[2] = "X"
        } else {
          for (let i = 0; i < 10; i++){
              let choice =  Math.floor(Math.random() * 9);
              if(this.gameBoard[choice] === "X" || this.gameBoard[choice] === "O"){
                continue
                
              }else if (this.gameBoard[choice] === ""){
                this.gameBoard[choice] = "X"
                break
              }
            }
         }
      }
    }

    },
   checkWin: function(){
    if(this.player.marker === "X"){
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
      } else if (this.gameBoard.every(function(element){
        return element !== ""
      })){
          console.log("It's a draw!")
          this.cells.forEach(this.stopBoardClick)
        }
    } else if (this.player.marker === "O"){
      if(
        this.gameBoard[0] === "O" && this.gameBoard[1] === "O" && this.gameBoard[2] === "O" ||
        this.gameBoard[0] === "O" && this.gameBoard[3] === "O" && this.gameBoard[6] === "O" ||
        this.gameBoard[0] === "O" && this.gameBoard[4] === "O" && this.gameBoard[8] === "O" ||
        this.gameBoard[1] === "O" && this.gameBoard[4] === "O" && this.gameBoard[7] === "O" ||
        this.gameBoard[2] === "O" && this.gameBoard[4] === "O" && this.gameBoard[6] === "O" ||
        this.gameBoard[2] === "O" && this.gameBoard[5] === "O" && this.gameBoard[8] === "O" ||
        this.gameBoard[6] === "O" && this.gameBoard[7] === "O" && this.gameBoard[8] === "O" ||
        this.gameBoard[3] === "O" && this.gameBoard[4] === "O" && this.gameBoard[5] === "O"
      ){
        console.log("You Won")
        this.cells.forEach(this.stopBoardClick)
      } else if (
        this.gameBoard[0] === "X" && this.gameBoard[1] === "X" && this.gameBoard[2] === "X" ||
        this.gameBoard[0] === "X" && this.gameBoard[3] === "X" && this.gameBoard[6] === "X" ||
        this.gameBoard[0] === "X" && this.gameBoard[4] === "X" && this.gameBoard[8] === "X" ||
        this.gameBoard[1] === "X" && this.gameBoard[4] === "X" && this.gameBoard[7] === "X" ||
        this.gameBoard[2] === "X" && this.gameBoard[4] === "X" && this.gameBoard[6] === "X" ||
        this.gameBoard[2] === "X" && this.gameBoard[5] === "X" && this.gameBoard[8] === "X" ||
        this.gameBoard[6] === "X" && this.gameBoard[7] === "X" && this.gameBoard[8] === "X" ||
        this.gameBoard[3] === "X" && this.gameBoard[4] === "X" && this.gameBoard[5] === "X"
  
      ) {
        console.log("Computer Won")
        this.cells.forEach(this.stopBoardClick)
      } else if (this.gameBoard.every(function(element){
        return element !== ""
      })){
          console.log("It's a draw!")
          this.cells.forEach(this.stopBoardClick)
        }
    } 
    
     
   },
   stopBoardClick: function(element){
    element.classList.add("canceled")
   },
   startGame: function(){
    this.cells.forEach(function(element){
      element.classList.remove("canceled");
      element.textContent = ""
    })
    for(let i = 0; i < 9; i++){
    this.gameBoard[i] = ""
    }
   },
   playerVsComputer: function(){
    this.clicked = false
    if (this.clicked === false){
      this.xSelector.addEventListener("click", function(ev){
        this.player = createPlayer("Player", "X")
        this.computer = createPlayer("Computer", "O")
        this.clicked = true
      }.bind(this))
    }
    
    if (this.clicked === false && this.gameBoard[4] !== ""){
        this.oSelector.addEventListener("click", function(ev){
        this.player = createPlayer("Player", "O")
        this.computer = createPlayer("Computer", "X")
        this.clicked = true
        this.gameBoard[4] = "X"
        this.render(ev)
      }.bind(this))
    }
   }
  }
Gameboard.init()


console.log(Gameboard)



