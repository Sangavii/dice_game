var player1=prompt("Enter the Player1 name");
var player2=prompt("Enter the Player2 name");
document.querySelector(".player1").innerHTML=player1;
document.querySelector(".player2").innerHTML=player2;

var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;


var randomNoImg1=document.querySelector(".img1");
randomNoImg1.setAttribute("src","images/dice"+randomNumber1+".png");

var randomNumber2=Math.random()*6;
randomNumber2=Math.floor(randomNumber2)+1;

var randomNoImg2=document.querySelector(".img2");
randomNoImg2.setAttribute("src","images/dice"+randomNumber2+".png");

if(randomNumber1==randomNumber2)
{
  document.querySelector("h1").innerHTML="Match is Draw";
  document.querySelector("h1").classList.add("winnerFont");
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML=player2+" WINS!!<i class='fas fa-flag'></i>";
  document.querySelector("h1").classList.add("winnerFont");

}
else if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="<i class='fas fa-flag'></i>"+player1+" WINS!!";
  document.querySelector("h1").classList.add("winnerFont");
}
