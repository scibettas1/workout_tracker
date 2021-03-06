
const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// Routes
// =============================================================
require("./routes/api.js")(app);
require("./routes/view.js")(app);
//require("./models/index.js")(app);


// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});