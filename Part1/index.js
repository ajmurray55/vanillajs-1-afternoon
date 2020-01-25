let board = [];

function play(clickedId) {
  let playerSpan = document.getElementById("player");
  let clickedElement = document.getElementById(clickedId);

  if (playerSpan.innerText === "X") {
    playerSpan.innerText = "O";
    clickedElement.innerText = "X";
    board[clickedId] = "X";
    console.log(board)
  } else {
    playerSpan.innerText = "X";
    clickedElement.innerText = "O";
    board[clickedId] = "O";
    console.log(board)
  }



let topLeft = board[0];
let topCenter = board[1];
let topRight = board[2];
let middleLeft = board[3];
let middleCenter = board[4];
let middleRight = board[5];
let bottomLeft = board[6];
let bottomCenter = board[7];
let bottomRight = board[8];
let boardFull = false;

if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
  alert(topLeft + `is the winner`);
  //   return;
}
if (
  middleLeft !== undefined &&
  middleLeft === middleCenter &&
  middleLeft === middleRight
) {
  alert(middleLeft + "is the winner");
  //   return;
}
if (
  bottomLeft !== undefined &&
  bottomLeft === bottomCenter &&
  bottomLeft === bottomRight
) {
  alert(bottomLeft + `is the winner`);
  //   return;
}
if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
  alert(topLeft + `is the winner`);
  //   return;
}
if (
  topCenter !== undefined &&
  topCenter === middleCenter &&
  topCenter === bottomCenter
) {
  alert(topCenter + `is the winner`);
  //   return;
}
if (
  topRight !== undefined &&
  topRight === middleRight &&
  topRight === bottomRight
) {
  alert(topRight + `is the winner`);
  //   return;
}
if (
  topLeft !== undefined &&
  topLeft === middleCenter &&
  topLeft === bottomRight
) {
  alert(topLeft + `is the winner`);
  //   return;
}
if (
  bottomLeft !== undefined &&
  bottomLeft === middleCenter &&
  bottomLeft === topRight
) {
  alert(bottomLeft + `is the winner`);
  //   return;
}

// let boardFull = true;

for (i = 0; i < 8; i++) {
  if (board[i] === undefined) {
    boardFull = false;
  }
}
if (boardFull === true) {
  alert("Cat's game, No winner, GAME OVER");
}
// console.log(board);
function reset() {
  board = [];
}
}
// let board = [];
// function play(clickedId) {
//   let playerSpan = document.getElementById("player");
//   let clickedElement = document.getElementById(clickedId);
//   let topLeft = board[0];
//   let topMiddle = board[1];
//   let topRight = board[2];
//   let middleLeft = board[3];
//   let middle = board[4];
//   let middleRight = board[5];
//   let bottomLeft = board[6];
//   let bottomMiddle = board[7];
//   let bottomRight = board[8];
//   let winMessage = " is the winner";
//   let boardFull = false;
//   if (playerSpan.innerText === "X") {
//     playerSpan.innerText = "O";
//     clickedElement.innerText = "X";
//     board[clickedId] = "X";
//     console.log(board[clickedId]);
//   } else {
//     playerSpan.innerText = "X";
//     clickedElement.innerText = "O";
//     board[clickedId] = "O";
//   }
//   if (topLeft !== undefined && topLeft === topMiddle && topLeft === topRight) {
//     alert(topLeft + winMessage);
//   }
//   if (
//     middleLeft !== undefined &&
//     middleLeft === middle &&
//     middleLeft === middleRight
//   ) {
//     alert(middleLeft + winMessage);
//   }
//   if (
//     bottomLeft !== undefined &&
//     bottomLeft === bottomMiddle &&
//     bottomLeft === bottomRight
//   ) {
//     alert(bottomLeft + winMessage);
//   }
//   if (
//     topLeft !== undefined &&
//     topLeft === middleLeft &&
//     topLeft === bottomLeft
//   ) {
//     alert(topLeft + winMessage);
//   }
//   if (
//     topMiddle !== undefined &&
//     topMiddle === middle &&
//     topMiddle === bottomMiddle
//   ) {
//     alert(topMiddle + winMessage);
//   }
//   if (
//     topRight !== undefined &&
//     topRight === topLeft &&
//     topRight === topMiddle
//   ) {
//     alert(topRight + winMessage);
//   }
//   if (topLeft !== undefined && topLeft === middle && topLeft === bottomRight) {
//     alert(topLeft + winMessage);
//   }
//   if (
//     topRight !== undefined &&
//     topRight === middle &&
//     topRight === bottomLeft
//   ) {
//     alert(topRight + winMessage);
//   }
//   for (i = 0; i < 9; i++) {
//     if (board[i] === undefined) {
//       boardFull = false;
//     } else {
//       boardFull = true;
//     }
//   }
//   if (boardFull === true) {
//     alert("CAT's game");
//   }
//   console.log(board);
// }
