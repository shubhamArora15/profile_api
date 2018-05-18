let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name    : String,
    age     : Number,
    mobile  : Number,
    address : String,
    status  : String,
    location: {}
});

module.exports = mongoose.model('user', userSchema);