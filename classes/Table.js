let Table = require("cli-table");
module.exports = class Test {
  constructor(game) {
    this.game = game;
  }
  showTable(moves) {
    let table = new Table({ head: ["Moves", ...moves] });
    for (let i = 0; i < moves.length; i++) {
      const row = [moves[i]];
      for (let j = 0; j < moves.length; j++) {
        row.push(this.game.getWinner(i, j));
      }
      table.push(row);
    }
    console.log(table.toString());
  }
};
