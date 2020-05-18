const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const exercise = require("./routers/exercise");
const users = require("./routers/users");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
const url =
  "mongodb+srv://dammyayans:dare1111@firstcluster-r5dot.mongodb.net/test?retryWrites=true&w=majority";
mongoose
  .connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
  })
  .then((res) => {
    console.log("successful");
  })
  .catch((err) => console.log(err));

app.use("/exercise", exercise);
app.use("/users", users);
app.listen(PORT, () => console.log(`server started at ${PORT}`));
