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
}, {
        collection: 'stats',
        versionKey: false,
        timestamps: {
            createdAt: 'created_date',
            updatedAt: 'updated_date'
        }
});

module.exports = mongoose.model('Stats', statsSchema);
