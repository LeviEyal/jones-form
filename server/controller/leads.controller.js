const nodemailer = require("nodemailer");

const Lead = require("../model/Lead");

/**
 * Validate the lead data
 */
const validateLead = (lead) => {
	const errors = {};
	if (!lead["first name"]) {
		errors.name = "First name is required";
	}
	if (!lead["last name"]) {
		errors.name = "Last name is required";
	}
	if (!lead["email"]) {
		errors.email = "Email is required";
	}
	if (!lead["phone"]) {
		errors.phone = "Phone is required";
	}
	return errors;
};

module.exports = {
	/* @desc: This function is used to store a new lead */
	insertNewLead: function (req, res) {
		const lead = new Lead(req.body);
		const errors = validateLead(lead);
		if (Object.keys(errors).length > 0) {
			console.log(errors);
			res.status(400).json(errors);
		} else {
			lead
				.save()
				.then((lead) => {
					console.log(lead);
					res.status(201).json(lead);
				})
				.catch((err) => {
					console.log(err);
					res.status(500).json(err);
				});
		}
	},
	/* @desc: This function is used to get all leads */
	getAllLeads: function (req, res) {
		Lead.find({})
			.sort({ _id: -1 })
			.then((leads) => {
				res.status(200).json(leads);
			})
			.catch((err) => {
				res.status(500).json(err);
			});
	},
};
