const crypto = require("crypto");
module.exports = class KeyGenerator {
  generateRandomkey() {
    return crypto.randomBytes(32).toString("hex");
  }
};
