//this file handles paths for html

const path = require("path");

module.exports = function (app) {

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/excercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/excercise.html"));
});

app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

}