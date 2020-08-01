const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI ||"mongodb://heroku_gwlx7n6l:og6f1ns1asec2qnc1nprq2ti8p@ds011409.mlab.com:11409/heroku_gwlx7n6l", {
  useNewUrlParser: true,
  useFindAndModify: false
});


// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});