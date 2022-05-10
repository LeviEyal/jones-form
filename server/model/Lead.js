const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema({
   "first name": {
      type: String,
      required: true,
      minlength: 2,
      match: /^[a-zA-Z]+$/,
   },
   "last name": {
      type: String,
      required: true,
      minlength: 2,
      match: /^[a-zA-Z]+$/,
   },
   email: {
      type: String,
      required: true,
      match: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
   },
   phone: {
      type: String,
      required: true,
      match: /^[0-9]{10}$/,
   }
});

module.exports = mongoose.model("Lead", LeadSchema);