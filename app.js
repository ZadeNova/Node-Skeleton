const express = require("express");
const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: true }));

// Register view Engine
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
	res.locals.path = req.path;
	next();
});

// Libaries needed
const moment = require("moment");
app.locals.moment = moment;
const session = require("express-session");
const passport = require("passport");

app.use(passport.session());

app.listen("8080", () => console.log("Listening on port 8080"));

// Routes
