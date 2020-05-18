const router = require("express").Router();
const User = require("../models/user.model");

router.get("/", (req, res) => {
  User.find().then((user) => res.send(user));
});
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  res.send(req.body);

  const newUser = new User({ username, password });
  newUser
    .save()
    .then(() => res.json("user added"))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
