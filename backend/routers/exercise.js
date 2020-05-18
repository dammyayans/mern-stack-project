const router = require("express").Router();
const Exercise = require("../models/exercise.model");
router.get("/", (req, res) => {
  Exercise.find().then((exercise) => res.send(exercise));
});
router.get("/:id", (req, res) => {
  Exercise.findById(req.params.id).then((exercise) => res.send(exercise));
});
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Exercise.findByIdAndDelete(id)
    .then(res.send("exercise deleted"))
    .catch((err) => res.status(400).send(err));
});
router.post("/update/:id", (req, res) => {
  const id = req.params.id;
  Exercise.findById(id).then((exercise) => {
    exercise.username = req.body.username;
    exercise.description = req.body.description;
    exercise.duration = req.body.duration;
    exercise.date = req.body.date;
    exercise
      .save()
      .then(() => res.json("updated successfully"))
      .catch((err) => res.status(400).send(err));
  });
});
router.post("/add", (req, res) => {
  const newExercise = new Exercise({
    username: req.body.username,
    description: req.body.description,
    duration: req.body.duration,
    date: req.body.date,
  });
  newExercise
    .save()
    .then((res) => console.log("is-success"))
    .catch((err) => res.status(200).send(err));
});

module.exports = router;
