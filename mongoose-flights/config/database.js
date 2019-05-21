const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost/flights';

mongoose.connect(connectionString, { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
    console.log('Connection to MongoDb Engine Established')
})