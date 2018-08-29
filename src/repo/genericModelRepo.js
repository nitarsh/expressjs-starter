Postgres = require("./postgres");

class genericModelRepo extends Postgres {
  constructor(model) {
    super();
    this.model = model;
  }

  getById(id) {
    return {};
  }

  getAll() {
    return [];
  }

  create(args) {}

  updateById(id, args) {}
}
