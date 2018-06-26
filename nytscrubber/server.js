const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/apiRoutes");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");

// Define middleware here
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// Use apiRoutes
app.use("/api", apiRoutes);


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactNytArticles");
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});