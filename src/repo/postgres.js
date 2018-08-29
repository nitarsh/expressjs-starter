const pgp = require("pg-promise");

class Postgres {
  constructor(options) {
    this.db = pgp(options);
  }
}

module.exports = { Postgres };
