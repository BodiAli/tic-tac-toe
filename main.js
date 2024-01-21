function createPlayer (name, marker, winningScore){
      
  return {name, marker, winningScore}
}

const black = document.getElementById("black")


  const Gameboard = {
    gameBoard: [],
    won: false,
    playerVsPlayerClicked: false,
    playerVsComputerClicked: false,
    turn: true,
    init: function(){
      this.cacheDom()
      this.bindEvents()
      this.playerVsComputer()
      this.playerVsPlayer()
    },
    cacheDom: function(){
      this.cells = document.querySelectorAll(".cells");
      this.startButton = document.getElementById("start")
      this.playerVsComputerButton = document.getElementById("ai")
      this.playerVsPlayerButton = document.getElementById("player")
      this.playerXName = document.getElementById("player-X")
      this.playerOName = document.getElementById("player-O")
      this.playerXLabel = document.getElementById("playerXLabel")
      this.playerYLabel = document.getElementById("playerYLabel")
      this.xSelector = document.getElementById("X")
      this.oSelector = document.getElementById("O")
      this.playerXScore = document.getElementById("scoreX")
      this.playerYScore = document.getElementById("scoreY")   
      this.restartButton = document.getElementById("restart")
    },
    bindEvents: function(){
      this.cells.forEach(function(element){
        element.addEventListener("click", this.addMarker.bind(this))
      }, this);
      this.startButton.addEventListener("click", this.startGame.bind(this))
      this.restartButton.addEventListener("click", this.restartGame.bind(this))
    },
    
    render: function(ev){
      if(this.playerVsComputerClicked === true){
      
      this.generateComputerChoice(ev)
      for (let i = 0; i < 10; i++){
        
        if (this.gameBoard[i] === "X" || this.gameBoard[i] === "O"){
          continue;
        }else if( (this.player.marker === "X") && (this.computer.marker === "O") &&
          (this.gameBoard[0] === "X" && this.gameBoard[1] === "X" && this.gameBoard[2] === "X" ||
          this.gameBoard[0] === "X" && this.gameBoard[3] === "X" && this.gameBoard[6] === "X" ||
          this.gameBoard[0] === "X" && this.gameBoard[4] === "X" && this.gameBoard[8] === "X" ||
          this.gameBoard[1] === "X" && this.gameBoard[4] === "X" && this.gameBoard[7] === "X" ||
          this.gameBoard[2] === "X" && this.gameBoard[4] === "X" && this.gameBoard[6] === "X" ||
          this.gameBoard[2] === "X" && this.gameBoard[5] === "X" && this.gameBoard[8] === "X" ||
          this.gameBoard[6] === "X" && this.gameBoard[7] === "X" && this.gameBoard[8] === "X" ||
          this.gameBoard[3] === "X" && this.gameBoard[4] === "X" && this.gameBoard[5] === "X")
        ){
          ev.target.textContent = this.player.marker
          break
        
        } else if ( (this.player.marker === "O") && (this.computer.marker === "X") &&
          (this.gameBoard[0] === "O" && this.gameBoard[1] === "O" && this.gameBoard[2] === "O" ||
          this.gameBoard[0] === "O" && this.gameBoard[3] === "O" && this.gameBoard[6] === "O" ||
          this.gameBoard[0] === "O" && this.gameBoard[4] === "O" && this.gameBoard[8] === "O" ||
          this.gameBoard[1] === "O" && this.gameBoard[4] === "O" && this.gameBoard[7] === "O" ||
          this.gameBoard[2] === "O" && this.gameBoard[4] === "O" && this.gameBoard[6] === "O" ||
          this.gameBoard[2] === "O" && this.gameBoard[5] === "O" && this.gameBoard[8] === "O" ||
          this.gameBoard[6] === "O" && this.gameBoard[7] === "O" && this.gameBoard[8] === "O" ||
          this.gameBoard[3] === "O" && this.gameBoard[4] === "O" && this.gameBoard[5] === "O")
        ) {
          ev.target.textContent = this.player.marker
          break;
        }
        
        else {
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
      this.checkWinPlayerVsComputer(ev)
    } else if (this.playerVsPlayerClicked === true) {
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
      this.checkWinPlayerVsPlayer()
    }

    

    },
    addMarker: function(ev){
      this.cells[0].classList.add("text-fade")
    this.gameBoard[0] = this.cells[0].textContent
    this.gameBoard[1] = this.cells[1].textContent

    this.gameBoard[2] = this.cells[2].textContent

    this.gameBoard[3] = this.cells[3].textContent

    this.gameBoard[4] = this.cells[4].textContent

    this.gameBoard[5] = this.cells[5].textContent

    this.gameBoard[6] = this.cells[6].textContent

    this.gameBoard[7] = this.cells[7].textContent
    
    this.gameBoard[8] = this.cells[8].textContent
    
    if (this.playerVsPlayerClicked === true){
      if (ev.target.textContent === "" && this.turn === true){
      
      this.gameBoard[ev.target.classList[0]] = "X"
      this.turn = false
    } else if (ev.target.textContent === "" && this.turn === false){
      this.gameBoard[ev.target.classList[0]] = "O"
      this.turn = true
    }
  }
  if (this.playerVsComputerClicked === true && ev.target.textContent === "") {
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
        } else if (this.gameBoard[7] === "X" && this.gameBoard[4] === "X" && this.gameBoard[1] === ""){
          this.gameBoard[1] = "X"
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
   checkWinPlayerVsComputer: function(){
    if(this.playerVsComputerClicked === true){
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
          
          this.playerXScore.textContent = +this.playerXScore.textContent + 1
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
          this.playerYScore.textContent = +this.playerYScore.textContent + 1
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
          this.playerXScore.textContent = +this.playerXScore.textContent + 1
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
          this.playerYScore.textContent = +this.playerYScore.textContent + 1
          this.cells.forEach(this.stopBoardClick)
        } else if (this.gameBoard.every(function(element){
          return element !== ""
        })){
            console.log("It's a draw!")
            this.cells.forEach(this.stopBoardClick)
          }
      }
    }
   },
   checkWinPlayerVsPlayer: function(){
    
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
        this.increaseWinning()
        console.log(`${this.playerX.name} won`)
        this.playerXScore.textContent = +this.playerXScore.textContent + 1
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
        console.log(`${this.playerO.name} won`)
        this.playerYScore.textContent = +this.playerYScore.textContent + 1
        this.cells.forEach(this.stopBoardClick)
      } else if (this.gameBoard.every(function(element){
        return element !== ""
      })){
          console.log("It's a draw!")
          this.cells.forEach(this.stopBoardClick)
        }
    
   },
   stopBoardClick: function(element){
    element.classList.add("canceled")
   },
   startGame: function(ev){
    this.cells.forEach(function(element){
      element.classList.remove("canceled");
      element.textContent = ""
    })
    for(let i = 0; i < 9; i++){
    this.gameBoard[i] = ""
    }
    black.classList.add("fade-out")
    black.addEventListener("animationend", function(ev){
      ev.target.classList.add("remove")
     })
     this.playerVsPlayerButton.classList.remove("remove1")
     this.playerVsComputerButton.classList.remove("remove1")
     this.restartButton.classList.remove("remove1")
     this.playerXLabel.classList.remove("remove1")
     this.playerYLabel.classList.remove("remove1")
     this.playerXName.classList.remove("remove1")
     this.playerOName.classList.remove("remove1")
     this.playerVsPlayerButton.classList.add("hiding")
     this.playerVsComputerButton.classList.add("hiding")
     this.restartButton.classList.add("hiding")
     this.playerXName.classList.add("hiding")
     this.playerOName.classList.add("hiding")
     this.playerXLabel.classList.add("hiding")
     this.playerYLabel.classList.add("hiding")
     ev.target.classList.add("fade-out")
     ev.target.addEventListener("animationend", function(ev){
      ev.target.classList.add("remove")
     })
   },
   playerVsComputer: function(){
    
    this.playerVsComputerButton.addEventListener("click", function(ev){
      if(this.playerVsPlayerClicked === false){
      this.playerVsComputerClicked = true
      this.markerSelector = false
      this.xSelector.classList.remove("remove2")
      this.oSelector.classList.remove("remove2")
      this.xSelector.classList.add("hiding")
      this.oSelector.classList.add("hiding")
      this.playerVsPlayerButton.classList.add("fade-out")
      this.playerVsPlayerButton.addEventListener("animationend", function(ev){
        ev.target.classList.add("remove")
      })
      this.playerXLabel.classList.add("fade-out")
      this.playerXLabel.addEventListener("animationend", function(ev){
        ev.target.classList.add("remove")
      })
      this.playerYLabel.classList.add("fade-out")
      this.playerYLabel.addEventListener("animationend", function(ev){
        ev.target.classList.add("remove")
      })
      this.playerXName.classList.add("fade-out")
      this.playerXName.addEventListener("animationend", function(ev){
        ev.target.classList.add("remove")
      })
      this.playerOName.classList.add("fade-out")
      this.playerOName.addEventListener("animationend", function(ev){
        ev.target.classList.add("remove")
      })
      if (this.playerVsComputerClicked === true){
        this.xSelector.addEventListener("click", function(ev){
        if (this.markerSelector === false){  
        this.player = createPlayer("Player", "X")
        this.computer = createPlayer("Computer", "O")
        this.markerSelector = true

       }
      }.bind(this))
    }
    
    if ((this.playerVsComputerClicked === true) && (this.markerSelector === false)){
        this.oSelector.addEventListener("click", function(ev){
        if(this.markerSelector === false){
        this.player = createPlayer("Player", "O", 0)
        this.computer = createPlayer("Computer", "X", 0)
        this.gameBoard[4] = "X"
        this.markerSelector = true
        this.render(ev)
      }
      }.bind(this))
    }
      }
      
    }.bind(this))
    
   },
   playerVsPlayer: function(){
    this.playerVsPlayerButton.addEventListener("click", function(ev){
      if (this.playerVsComputerClicked === false){
      this.playerX = createPlayer(this.playerXName.value, "X", 0);
      this.playerO = createPlayer(this.playerOName.value, "O", 0);
      this.playerVsPlayerClicked = true
      this.playerVsComputerButton.classList.add("fade-out")
      this.playerVsComputerButton.addEventListener("animationend", function(ev){
        ev.target.classList.add("remove")
      })
      }
      
    }.bind(this))
   },
   increaseWinning: function(){
    this.playerX.winningScore++
   },
   restartGame: function(ev){
    this.cells.forEach(function(element){
      element.classList.remove("canceled");
      element.textContent = ""
    })
    for(let i = 0; i < 9; i++){
    this.gameBoard[i] = ""
    }
    if ((this.playerVsComputerClicked === true) && (this.computer.marker === "X")){
      this.gameBoard[4] = "X"
    }
    this.render(ev)
   }
  }

Gameboard.init()


const Stats = {
  init: function(){
    this.cacheDom()
    this.render()
  },
  cacheDom: function(){
   this.playerX = document.getElementById("nameX");
   this.playerY = document.getElementById("nameY");
  },
  render: function(){
    Gameboard.playerVsPlayerButton.addEventListener("click", this.addPlayerVsPlayerStats.bind(this))
    Gameboard.playerVsComputerButton.addEventListener("click", this.addPlayerVsComputerStats.bind(this))
    
  },
  addPlayerVsPlayerStats: function(ev){
    if(Gameboard.playerVsComputerClicked === false) {
    if(Gameboard.playerOName.value === ""){
      Gameboard.playerOName.setCustomValidity("Please Enter your name")
      Gameboard.playerOName.reportValidity()
    } else if (Gameboard.playerXName.value === ""){
      Gameboard.playerXName.setCustomValidity("Please Enter your name")
      Gameboard.playerXName.reportValidity()
    }else {
    this.playerX.textContent = `${Gameboard.playerXName.value}:`
    this.playerY.textContent = `${Gameboard.playerOName.value}:`
    Gameboard.playerXName.value = ""
    Gameboard.playerOName.value = ""
  }
    ev.preventDefault()
  }
},
addPlayerVsComputerStats: function(ev){
  if(Gameboard.playerVsPlayerClicked === false){
    this.playerX.textContent = "Player:"
    this.playerY.textContent = "Computer:"
  }
}
}

Stats.init()
