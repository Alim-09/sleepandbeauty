const express = require('express')
const app = express()
const path = require("path")

// Settings
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile)
app.set("view engine", "ejs");

// Routes
app.use(require("./routes/routes"));

// Static files
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/scripts'));

// Listening the serv
app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port?`)
})