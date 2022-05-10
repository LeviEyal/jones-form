const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const leadsController = require("./controller/leads.controller");
const app = express();

/* Middlewares */
app
	.use(express.json())
	.use(express.urlencoded({ extended: true }))
	.use(require("cors")());

/* Routes */
app
	.post("/newLead", leadsController.insertNewLead)
	.get("/leads", leadsController.getAllLeads);

/* Server */
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
	mongoose
		.connect(process.env.DB_CONNECTION_STRING)
		.then(() => {
			console.log("Connected to MongoDB Atlas database");
		})
		.catch((err) => {
			console.log(err);
		});
});
