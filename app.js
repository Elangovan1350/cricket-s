let indiaScroce = document.getElementById("indian");
let opponentScroce = document.getElementById("opponent");
 let  total = 0;
 let opponentTotal = 0;
function indian (add){
   
    total = total + add;
    indiaScroce.textContent = total;
}

function opponent (add){
   
    opponentTotal = opponentTotal + add;
    opponentScroce.textContent = opponentTotal;
}
function reset(){
    total = 0;
    opponentTotal = 0;
    indiaScroce.textContent = 0;
    opponentScroce.textContent = 0;
    
    
}