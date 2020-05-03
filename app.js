var box1 = document.querySelector("#box1");
var box1 = document.querySelector("#box2");
var box1 = document.querySelector("#box3");
var box1 = document.querySelector("#box4");
var box1 = document.querySelector("#box5");
var box1 = document.querySelector("#box8");
var box1 = document.querySelector("#box9");
var box1 = document.querySelector("#box12");
var box1 = document.querySelector("#box13");
var box1 = document.querySelector("#box14");
var box1 = document.querySelector("#box15");
var box1 = document.querySelector("#box16");

var board = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];
var arrdiv = [
  box1,
  box2,
  box3,
  box4,
  box5,
  box8,
  box9,
  box12,
  box13,
  box14,
  box15,
  box16,
];
const player1_Button = document.getElementById("player-1");
const player2_Button = document.getElementById("player-2");

console.log(player1_Button);
console.log(player2_Button);

player1_Button.addEventListener("click", rollDice_1);
player2_Button.addEventListener("click", rollDice_2);

var player1 = ["PROGRAD", 0, 1000];
var player2 = ["FACEPREP", 0, 1000];

function rollDice_1() {
  let position = Math.floor(Math.random() * 6) + 1;
  console.log("Player one rolls", position);
  changePosition_1(player1[1], position);
}
var count = 0;

function changePosition_1(old, currentPos) {
  count++;
  var newPosition = old + currentPos;
  player1[1] = newPosition;
  newPosition = newPosition % 11;
  var img = document.getElementById("img1");
  img.style.visibility = "hidden";
  console.log("count" + count);
  if (count > 1) {
    var elem = document.getElementById("img11");
    elem.remove();
  }
  let template = `<img src="./images/player1.jpg"id="img11" alt="red"  style="width:40px;">`;
  arrdiv[newPosition].innerHTML += template;
  console.log("person play", player1[1]);
  updateMoney_1(player1[1]);
}

function updateMoney_1(p2) {
  var updateMoney = 0;
  if (p2 < board.length) updateMoney = player1[2] - board[p2 - 1];
  else {
    p2 = p2 % 11;
    updateMoney = player1[2] - board[p2 - 1];
  }
  player1[2] = updateMoney;
  if (updateMoney > 0) {
    document.querySelector(".item3").innerHTML = updateMoney;
  } else {
    document.querySelector(".item3").innerHTML = "Player 2 win";
  }
  console.log(updateMoney);
}

function rollDice_2() {
  let position = Math.floor(Math.random() * 6) + 1;
  console.log("Player one rolls", position);
  changePosition_2(player2[1], position);
}
var count2 = 0;

function changePosition_2(old, currentPos) {
  count2++;
  var newPosition = old + currentPos;
  player2[1] = newPosition;
  newPosition = newPosition % 11;
  var img = document.getElementById("img2");
  img.style.visibility = "hidden";
  console.log("count" + count2);
  if (count2 > 1) {
    var elem = document.getElementById("img12");
    elem.remove();
  }
  let template = `<img src="./images/player2.jpg" id="img12" alt="red" style="width:40px;">`;
  arrdiv[newPosition].innerHTML += template;
  console.log("person play", player2[1]);
  updateMoney_2(player2[1]);
  // console.log(player2[1]);
  // updateMoney_1(player2[1]);
}

function updateMoney_2(p2) {
  var updateMoney = 0;
  if (p2 < board.length) updateMoney = player2[2] - board[p2 - 1];
  else {
    p2 = p2 % 11;
    updateMoney = player2[2] - board[p2 - 1];
  }
  player2[2] = updateMoney;
  if (updateMoney > 0) {
    document.querySelector(".item4").innerHTML = updateMoney;
  } else {
    document.querySelector(".item4").innerHTML = "Player 1 win";
  }
  console.log(updateMoney);
}
