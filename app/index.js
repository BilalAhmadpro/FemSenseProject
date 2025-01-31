require("dotenv").config();
const express = require('express')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//express app that has middleware to route the endpoints to their
const app = express()

//import the routehandlers for each endpoint
const userRoutes = require('./routes/user');
const symptomsRoutes = require('./routes/symptoms');
const periodRoutes = require('./routes/period');
const cycleRoutes = require('./routes/cycle');
const medicinereminderRoutes = require('./routes/medicinereminder');
const notesRoutes = require('./routes/notes');
const physicalActivityRoutes = require('./routes/physicalactivity');
const moodtrackerRoutes = require('./routes/mood');
const menstraulflowRoutes = require('./routes/menstrualflow');
const insightsRoutes = require('./routes/insights');
const daytrackRoutes = require('./routes/daytrack');

//defining routes that handle req to given endpoints
app.use("/medicinereminder", medicinereminderRoutes);
app.use("/period", periodRoutes);
app.use("/cycle", cycleRoutes);
app.use("/user", userRoutes);
app.use("/symptoms", symptomsRoutes);
app.use("/notes", notesRoutes);
app.use("/physicalactivity", physicalActivityRoutes);
app.use("/moodtracker", moodtrackerRoutes);
app.use("/menstrualflow", menstraulflowRoutes);
app.use("/insights", insightsRoutes);
app.use("/daytracker", daytrackRoutes);

 
module.exports = app;