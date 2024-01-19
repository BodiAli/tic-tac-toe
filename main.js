
  const Gameboard = {
    gameBoard: [],
    init: function(){
      this.cacheDom()
      this.bindEvents()
    },
    createPlayer: function(name, marker){
      
      return {name, marker}
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
      // this.cells.forEach(function(element){
      //   if (element.textContent){
      //     this.gameBoard.push(element.textContent)
      //   }
      // },this);
      this.gameBoard[0] = this.cells[0].textContent
      this.gameBoard[1] = this.cells[1].textContent
      this.gameBoard[2] = this.cells[2].textContent
      this.gameBoard[3] = this.cells[3].textContent
      this.gameBoard[4] = this.cells[4].textContent
      this.gameBoard[5] = this.cells[5].textContent
      this.gameBoard[6] = this.cells[6].textContent
      this.gameBoard[7] = this.cells[7].textContent
      this.gameBoard[8] = this.cells[8].textContent
    },
    render: function(ev){
      ev.target.textContent = "X"
      for (let i = 0; i < 10; i++){
        let choice =  Math.floor(Math.random() * 9);
        if (this.cells[choice].textContent === "X" || this.cells[choice].textContent === "O"){
          continue;
        }
        else {
          this.cells[choice].textContent = "O"
          break;
        }
      
      }
    },
    addMarker: function(ev){
      this.createPlayer("bodi", "X")
      switch (ev.target.classList[0]){
        case 0:
          this.addGameFlow();
          break;
        case 1:
          this.addGameFlow();
          break;
        case 2: 
          this.addGameFlow();
          break;
        case 3: 
          this.addGameFlow();
          break;
        case 4: 
          this.addGameFlow();
          break;
        case 5: 
          this.addGameFlow();
          break;
        case 6: 
          this.addGameFlow();
          break;
        case 7: 
          this.addGameFlow();
          break;
        case 8: 
          this.addGameFlow();
          break;
      }
      this.render(ev)
      this.addGameFlow()
    },
    computerPlayer: function(){
      this.createPlayer("Computer", "O")
    }
  }
Gameboard.init()


console.log(Gameboard)

for (let i = 0; i < 20; i++){
  if (i === 5) {continue};
  if (i === 10) {continue};
  if (i === 15) {continue} ;
  if (i === 18) {break}
  console.log(i)
  
}