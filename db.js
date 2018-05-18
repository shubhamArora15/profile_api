let mongoose = require('mongoose');

module.exports = database = () => {
    var __selectedDatabase = 'mongodb://offbase:offbase15@ds247619.mlab.com:47619/applications_database';

    mongoose.connect( __selectedDatabase);

    var db = mongoose.connection;

    db.on('connected', () =>{
    console.log(' Database   : here');
    })
    .on('error', console.error.bind(console, 'MongoDB connection error:'));
}