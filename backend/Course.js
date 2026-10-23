const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
    {
        idCreator: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        idBuyers: {
            type: [String]
        }        
    }
);

module.exports = mongoose.model('Course', courseSchema);