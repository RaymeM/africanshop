const { Schema, model } = require("mongoose");
const { DatabaseError } = require("pg/lib");

const postsSchema = new Schema ({
title: { type: String, require: true},
body: {type: String, require: true},
createdAt: {type: Date, default: Date.now}
})

const postsModel = model("post", postsSchema);

module.exports = postsModel;