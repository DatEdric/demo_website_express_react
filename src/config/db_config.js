const mongoose = require('mongoose');

async function connectdb() {
    try {
        await mongoose.connect('mongodb://localhost:27017/ecco_db');
        console.log('connect to ecco_bd successfully !!!');
    } catch (error) {
        console.log('failed to connect to ecco_bd');
    }
}

module.exports = { connectdb };
