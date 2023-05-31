const crypto = require("crypto");
module.exports = class Hmac {
  constructor(key, turn) {
    this.key = key;
    this.turn = turn;
  }
  createHmac() {
    return crypto
      .createHmac("sha3-256", this.key)
      .update(this.turn)
      .digest("hex");
  }
};
