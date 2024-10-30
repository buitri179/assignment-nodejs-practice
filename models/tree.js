const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    treename: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Tree', schema);