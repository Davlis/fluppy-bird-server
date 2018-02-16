const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const statsSchema = new Schema({
    score: {
        type: Number,
        required: true,
    },
    nickname: {
        type: String,
        required: true,
        minlength: 3,
    },
});

module.exports = statsSchema;
