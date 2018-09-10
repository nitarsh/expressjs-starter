const pgp = require("pg-promise")();

class Postgres {
  constructor(options) {
    try {
      this.db = pgp(options);
    } catch (err) {
      throw "Error initializing Postgres. ";
    }
  }

  listTables() {
    return this.db.any(
      "SELECT tablename FROM pg_catalog.pg_tables where schemaname='public'"
    );
  }

  createTable(tableName, schema) {
    return this.db.none(`CREATE TABLE ${tableName} ( ${schema} )`);
  }

  dropTable(tableName) {
    return this.db.none(`DROP TABLE ${tableName}`);
  }

  close() {
    this.db.$pool.end;
  }
}

module.exports = Postgres;
