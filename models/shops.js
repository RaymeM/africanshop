const { Schema, model, Types } = require("mongoose");

const shopsSchema = new Schema({
  name: { type: String, require: true },
  owner: {type: String, require: true},
  description : {type: String, require: true},
  city: {type: String},
  address: {type: String},
  email: {type: String},
  telephoneNumber: {type: String},
  img: { type: String },
  location: {type: String},
  createdAt: { type: Date, default: Date.now() },
  
});

const shopsModel = model("Shop", shopsSchema);

module.exports = shopsModel;