class GenericHandler {
  constructor(model) {
    this.model = model;
  }
  fetch(req, res) {
    return res.json(this.model.get());
  }

  post(req, res) {
    return res.json(this.model.create(req.body));
  }

  put(req, res) {
    return res.json(this.model.update(req.body));
  }

  remove(req, res) {
    return res.json(this.model.remove(req.body));
  }
}

module.exports = GenericHandler;
