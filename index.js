var randomNum1 = Math.floor(Math.random()*6)+1;

var randomdiceimg = "dice" + randomNum1 + ".png";

var randomImagesource = "Images/" + randomdiceimg;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImagesource);


var randomNum2 = Math.floor(Math.random()*6)+1;

var randomImagesource2 = "Images/dice" + randomNum2 + ".png";

document.querySelectorAll('img')[1].setAttribute('src', randomImagesource2);

if (randomNum1 > randomNum2){
  document.querySelector('h1').innerHTML= "🚩 Player 1 Wins!";
}
else if (randomNum2 > randomNum1) {
  document.querySelector('h1').innerHTML= "Player 2 Wins! 🚩";
}
else{
  document.querySelector('h1').innerHTML= "Draw!";
}
