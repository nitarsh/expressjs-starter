const chai = require("chai");
const should = chai.should();
const expect = chai.expect;
const config = require("../../src/config");

describe("ENV Vars", function() {
  describe("Declared ENV Vars", function() {
    it("should return correct value", function(done) {
      process.env.HAPPY = "DAYS";
      config.get("HAPPY").should.equal("DAYS");
      done();
    });
  });
  describe("Un-declared ENV Vars", function() {
    it("should throw error", function(done) {
      const calledFn = () => config.get("NOTHAPPY");
      expect(calledFn).to.throw(/Cannot find config:/);
      done();
    });
  });
});

describe("Configs in file", function() {
  describe("Declared configs", function() {
    it("cfg3 should return value declared in commons", function(done) {
      config.get("cfg3").should.equal("cfg3common");
      done();
    });
    it("cfg2 should return value declared in test", function(done) {
      config.get("cfg2").should.equal("cfg2test");
      done();
    });
  });
  describe("Un-declared configs", function() {
    it("should throw error", function(done) {
      const calledFn = () => config.get("cfg4");
      expect(calledFn).to.throw(/Cannot find config:/);
      done();
    });
  });
});
