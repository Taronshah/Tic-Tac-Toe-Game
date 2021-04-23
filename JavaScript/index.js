
  //--------------------------------------------------

  const clickSound = document.getElementById('clickSound');
  const Remark = document.getElementById('observe');
  const Wenner = document.getElementById('Wenner');
                  /*Sound*/
  //--------------------------------------------------


let Tic
let blocked 
  function PlayAgain(){
      blocked = null;
      Tic =  'O';
      let i = 1;
    
      for(; i <= 9; i++){
      newGame(i);
      document.getElementById('WinMessage').style.transform = 'translateY(-100%)';
      document.getElementById('root').style.transform = 'translateY(0%)'
  }
  }




  function newGame(delet){
    document.getElementById('file' + delet).innerHTML = '';
  } 



checkState = (event) =>{
  if(blocked != null){
   gameMessage('the game is over')
   //After the victory stops the game
  }else if(event.innerHTML == ''){
    event.innerHTML = Tic;
    clickReview();
    clickSound.play()
  }else {
    gameMessage(`can not be`);
    Remark.play()      //so that it is not possible to change the already existing element
  }
}
//adjusted game


clickReview = () =>{
    if(checkVanquisher(Tic)){
      document.getElementById('WinMessage').style.transform = 'translate(0%)';
      document.querySelector('#WinMessage > p').innerHTML =  `Winner ${Tic}`;
      document.getElementById('Reset').innerHTML = 'New Game';
      clickSound.pause()
      Wenner.play()
      //the game is over
      blocked = Tic
    }else if(Tic ==  'X'){
        Tic = 'O';

    }else{
        Tic = 'X';
        gameMessage('Winner' + Tic);

    }
    gameMessage(`it's  ${Tic}'s turn`)//The game is frustrated by the work of "X" to  "O" and so on
}

function gameMessage(elem) {
    document.getElementById('startsWit').innerHTML = elem
}//Learn about the current information from the game

function checkVanquisher(dav/*Tic value: X' to O'*/){
    var render = 0;
    if(checkCombine(1,2,3,dav) ||
       checkCombine(4,5,6,dav) ||
       checkCombine(7,8,9,dav) ||
       checkCombine(1,4,7,dav) ||
       checkCombine(2,5,8,dav) ||
       checkCombine(3,6,9,dav) ||
       checkCombine(1,5,9,dav) ||
       checkCombine(3,5,7,dav)){
         // 123
         // 456
         // 789
         render  = 1
    }
    return render
}
function checkCombine(d,a,v,dav) {
    var  render = 0;
    if(Conquest(d) == dav && Conquest(a) == dav && Conquest(v) == dav){
        render = 1;
    }
    return render
}

function Conquest(pix) {
    return document.getElementById('file' + pix).innerHTML;
}

