const readline = require("readline");
const Game = require("./classes/Game");
const KeyGenerator = require("./classes/KeyGenerator");
const Hmac = require("./classes/Hmac");
const validation = require("./validators");
const Table = require("./classes/Table");

const moves = process.argv.slice(2);

function computerRandomMove(moves) {
  return moves[Math.floor(Math.random() * moves.length)];
}

function gameLaunch() {
  validation.validators(moves);

  let key = new KeyGenerator().generateRandomkey();
  let computerMove = computerRandomMove(moves);
  const HMAC = new Hmac(key, computerMove).createHmac();
  const game = new Game();

  console.log(`HMAC:${HMAC}`);
  console.log("Available moves:");
  moves.forEach((move, i) => {
    console.log(i + 1 + " - " + move);
  });
  console.log("0 - exit\n? - help ");

  const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  repeat();

  function repeat() {
    userInput.question("Enter your move:", (move) => {
      const userMove = moves[+(move - 1)];

      if (move === "?") {
        const table = new Table(game);
        table.showTable(moves);
        repeat();
      } else if (move == 0) {
        console.log("See you later, thank you for playing!");
        userInput.close();
      } else if (!userMove) {
        console.log("The move is not available in the menu, please, try again");
        repeat();
      } else {
        console.log(`Your move:${userMove}`);
        console.log(`Computer move:${computerMove}`);
        console.log(game.getWinner(+move, moves.indexOf(computerMove) + 1));
        console.log(`HMAC key:${key}`);
        userInput.close();
      }
    });
  }
}

try {
  gameLaunch();
} catch (err) {
  console.log(err.message);
}
