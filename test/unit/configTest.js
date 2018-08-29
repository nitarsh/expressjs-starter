const chai = require("chai");
const should = chai.should();
const expect = chai.expect;
const { getConfig } = require("../../src/config");

describe("ENV Vars", function() {
  describe("Declared ENV Vars", function() {
    it("should return correct value", function(done) {
      process.env.HAPPY = "DAYS";
      getConfig("HAPPY").should.equal("DAYS");
      done();
    });
  });
  describe("Un-declared ENV Vars", function() {
    it("should throw error", function(done) {
      const calledFn = () => getConfig("NOTHAPPY");
      expect(calledFn).to.throw(/Cannot find config:/);
      done();
    });
  });
});

describe("Configs in file", function() {
  describe("Declared configs", function() {
    it("cfg3 should return value declared in commons", function(done) {
      getConfig("cfg3").should.equal("cfg3common");
      done();
    });
    it("cfg2 should return value declared in test", function(done) {
      getConfig("cfg2").should.equal("cfg2test");
      done();
    });
  });
  describe("Un-declared configs", function() {
    it("should throw error", function(done) {
      const calledFn = () => getConfig("cfg4");
      expect(calledFn).to.throw(/Cannot find config:/);
      done();
    });
  });
});
