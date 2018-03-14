// Dependencies
var mongoose = require("mongoose");
var express = require("express");
var bodyParser = require("body-parser");

// Require all models
var db = require("./models");

// Set up express app
var app = express();
var PORT = process.env.PORT || 3000;

// Set up body parser from documentation
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Access static directory
app.use(express.static(__dirname + "/public"));
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/runescrape";
// Connect to mongo
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);
// Set Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Routes
require("./routes/api.js")(app);
require("./routes/index.js")(app);
require("./routes/view.js")(app);

// Start the server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
