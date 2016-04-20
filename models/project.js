/**
 * Created by New User on 4/20/2016.
 */
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// This is just for the basic project - once this is setup, it will be shelved and built off of
var projectSchema = new mongoose.Schema({
    createdBy: String,
    createdDate: Date,
    lastUpdated: { type: Date, default: Date.now },
    name: String,
    date: Date,
    client: {
        client_id: String,
        name: String,
        address: String,
        city: String
    },
    state: String,
    description: String,
    amount: Number,
    lat: Number,
    lon: Number
});

// Return model
module.exports = restful.model('Projects', projectSchema);