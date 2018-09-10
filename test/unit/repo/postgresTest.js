const chai = require("chai");
const should = chai.should();
const expect = chai.expect;
const config = require("../../../src/config");
const Postgres = require("../../../src/repo/postgres");

describe("Postgres", function() {
  const pg = new Postgres(config.get("dbOptions"));
  describe("createTable()", function() {
    it("should create table", async () => {
      const schema = "name varchar(80)";
      await pg.createTable("city", schema);
      await pg.listTables().then(tables => {
        tables.should.deep.include({ tablename: "city" });
      });
      pg.close();
      await pg.dropTable("city");
      pg.close();
    });
    // it("should create DB", function(done) {
    //   pg.createDB();
    //   pg.doesDBExist().should.equal(true);
    //   done();
    // });
  });
});
