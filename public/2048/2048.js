"use strict";

var board;
var score = 0;
var highScore = 0;
var rows = 4;
var columns = 4;
var startX, startY, endX, endY;

window.onload = function () {
  setGame();
  addTouchControls();
};

function setGame() {
  board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  //   board = [
  //     [2, 2, 2, 2],
  //     [2, 2, 2, 2],
  //     [4, 4, 8, 8],
  //     [4, 4, 8, 8],
  //   ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      //creates div and adds ids to it like this
      // <div id = "0-0"></div>
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      let num = board[r][c];
      updateTile(tile, num);
      document.getElementById("board").append(tile);
    }
  }

  setTwo();
  setTwo();
}

function hasEmptyTile() {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (board[r][c] == 0) {
        return true;
      }
    }
  }
  return false;
}

function setTwo() {
  if (!hasEmptyTile()) {
    return;
  }

  let found = false;

  while (!found) {
    //random r, c
    let r = Math.floor(Math.random() * rows); //nr intre 0 si 1 * 4
    let c = Math.floor(Math.random() * columns);

    if (board[r][c] == 0) {
      board[r][c] = 2;
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      tile.innerText = 2;
      tile.classList.add("x2");
      found = true;
    }
  }
}

function updateTile(tile, num) {
  tile.innerText = "";
  //clear the class list because we don't want tiles to have
  //multiple classes
  tile.classList.value = "";
  tile.classList.add("tile");
  if (num > 0) {
    tile.innerText = num.toString();
    if (num <= 4096) {
      tile.classList.add("x" + num.toString());
    } else {
      tile.classList.add(x8192);
    }
  }
}

document.addEventListener("keyup", (e) => {
  if (e.code == "ArrowLeft") {
    slideLeft();
    if (isGameOver()) {
      alert("Game Over!");
      resetGame();
    }
    setTwo();
  } else if (e.code == "ArrowRight") {
    slideRight();
    if (isGameOver()) {
      alert("Game Over!");
      resetGame();
    }
    setTwo();
  } else if (e.code == "ArrowUp") {
    slideUp();
    if (isGameOver()) {
      alert("Game Over!");
      resetGame();
    }
    setTwo();
  } else if (e.code == "ArrowDown") {
    slideDown();
    if (isGameOver()) {
      alert("Game Over!");
      resetGame();
    }
    setTwo();
  }
  document.getElementById("score").innerText = score;
  document.getElementById("highScore").innerText = highScore;
});

function filterZero(row) {
  //create a new array that takes all the nums, except those that =0
  return row.filter((num) => num != 0);
}

function slide(row) {
  //[0, 2, 2, 2]
  //get rid of 0 => [2, 2, 2]
  row = filterZero(row);

  //slide
  for (let i = 0; i < row.length - 1; i++) {
    //check every 2 [2, 2, 2] => [4, 0, 2]
    if (row[i] == row[i + 1]) {
      row[i] *= 2;
      row[i + 1] = 0;
      score += row[i];
      if (score >= highScore) {
        highScore = score;
      } else {
        highScore;
      }
    }
  }
  row = filterZero(row); //[4,2]

  //add zeroes
  while (row.length < columns) {
    row.push(0);
  } //[4, 2, 0, 0]

  return row;
}

function slideLeft() {
  for (let r = 0; r < rows; r++) {
    let row = board[r];
    row = slide(row);
    board[r] = row;

    for (let c = 0; c < columns; c++) {
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
}

function slideRight() {
  for (let r = 0; r < rows; r++) {
    let row = board[r];
    row.reverse();

    row = slide(row);

    row.reverse();
    board[r] = row;

    for (let c = 0; c < columns; c++) {
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
}

function slideUp() {
  for (let c = 0; c < columns; c++) {
    let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
    row = slide(row);
    // board[0][c] = row[0];
    // board[1][c] = row[1];
    // board[2][c] = row[2];
    // board[3][c] = row[3];

    for (let r = 0; r < rows; r++) {
      board[r][c] = row[r];
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
}

function slideDown() {
  for (let c = 0; c < columns; c++) {
    let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
    row.reverse();
    row = slide(row);
    row.reverse();
    // board[0][c] = row[0];
    // board[1][c] = row[1];
    // board[2][c] = row[2];
    // board[3][c] = row[3];

    for (let r = 0; r < rows; r++) {
      board[r][c] = row[r];
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
}

function isGameOver() {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (board[r][c] == 0) {
        return false;
      }
    }
  }

  // Check for possible merges horizontally
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns - 1; c++) {
      if (board[r][c] == board[r][c + 1]) {
        return false;
      }
    }
  }

  // Check for possible merges vertically
  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows - 1; r++) {
      if (board[r][c] == board[r + 1][c]) {
        return false;
      }
    }
  }

  // If no empty tiles and no possible merges, game is over
  return true;
}

function resetGame() {
  if (score > highScore) {
    highScore = score;
  }
  score = 0;
  document.getElementById("board").innerHTML = "";
  setGame();
}

// Add touch controls
function addTouchControls() {
  document.addEventListener("touchstart", function (event) {
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
  });

  document.addEventListener("touchend", function (event) {
    endX = event.changedTouches[0].clientX;
    endY = event.changedTouches[0].clientY;
    handleSwipe();
  });
}

function handleSwipe() {
  let deltaX = endX - startX;
  let deltaY = endY - startY;

  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    if (deltaX > 0) {
      slideRight();
    } else {
      slideLeft();
    }
  } else {
    if (deltaY > 0) {
      slideDown();
    } else {
      slideUp();
    }
  }

  if (isGameOver()) {
    alert("Game Over!");
    resetGame();
  } else {
    setTwo();
  }
  document.getElementById("score").innerText = score;
  document.getElementById("highScore").innerText = highScore;
}

// Prevent page refresh on drag down
document.addEventListener(
  "touchmove",
  function (event) {
    event.preventDefault();
  },
  { passive: false }
);
