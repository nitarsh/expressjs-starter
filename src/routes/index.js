const router = require("express").Router();
const { GenericHandler } = require("../handlers");
const { user } = require("../models");

const handler = new GenericHandler(user);

router.get("/", (req, res) => handler.fetch(req, res));
router.post("/", (req, res) => handler.post(req, res));
router.put("/", (req, res) => handler.put(req, res));
router.delete("/", (req, res) => handler.remove(req, res));

module.exports = router;
