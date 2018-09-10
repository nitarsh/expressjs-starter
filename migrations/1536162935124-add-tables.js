// connect to postgres
const Repo = require("../src/repo");
const config = require("../src/config");

const repo = Repo(config.get("dbOptions"));

module.exports.up = function(next) {
  // create tables schema

  // call postgres create tables
  // update current migration value
  next();
};

module.exports.down = function(next) {
  // remove tables speficied above (with cascade if necessary)
  next();
};
