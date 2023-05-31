const moves = process.argv.slice(2);
module.exports = class Game {
  constructor() {
    this.moves = [...moves];
  }
  getWinner(userTurn, computerTurn) {
    const difference =
      (computerTurn - userTurn + this.moves.length) % moves.length;
    if (difference == 0) {
      return "Draw";
    } else if (difference >= this.moves.length / 2) {
      return "You win!";
    } else return "You lose!";
  }
};
