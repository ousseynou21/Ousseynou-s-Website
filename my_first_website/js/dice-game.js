// Dice 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png";

var randomImageSource1 = "../img/" + randomDiceImage1;

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);




// Dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "../img/" + randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// Identify Winner
//IF player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 is the winner!"
}

else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 is the winner!"
}

else {
  document.querySelector("h1").innerHTML = "Draw";
}
