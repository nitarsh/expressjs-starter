const genericModel = require("./genericModel");

const user = new genericModel("user");

user.get = () => ({ ok: true });

user.create = () => ({ msg: "hello" });

module.exports = user;
