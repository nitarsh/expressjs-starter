const assert = require("assert");
const chai = require("chai");
const chaiHttp = require("chai-http");
let should = chai.should();

const server = require("../../index.js");

chai.use(chaiHttp);

describe("Endpoints", function() {
  describe("# GET /", function() {
    it("should 200 ok", function(done) {
      chai
        .request(server)
        .get("/")
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe("# POST /", function() {
    it("should 200 ok", function(done) {
      chai
        .request(server)
        .post("/")
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });

    it("should have correct msg", function(done) {
      chai
        .request(server)
        .post("/")
        .end((err, res) => {
          res.body.should.have.deep.include({ msg: "hello" });
          done();
        });
    });
  });
});
