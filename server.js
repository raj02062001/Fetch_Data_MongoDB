const express = require("express");
const mongoose = require("mongoose");
const app = express();
const ejs = require("ejs");
const { kStringMaxLength } = require("buffer");

app.set("view engine", "ejs");

mongoose.connect(
  "mongodb+srv://raj:raj@atlascluster.buxi0b2.mongodb.net/RajDynamic?retryWrites=true&w=majority"
);

const usersSchema = {
  name: String,
  email: String,
  phone: Number,
  message: String,
};

const user = mongoose.model("user", usersSchema);

app.get("/", (req, res) => {
  user.find({}, function (err, users) {
    res.render("index", {
      usersList: users,
    });
  });
});

app.listen(4000, function () {
  console.log("server is running");
});
