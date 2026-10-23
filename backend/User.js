const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: { 
        type: String,
        required: true 
    },
}, { timestamps: true });


userSchema.pre('save', function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    const bcrypt = require('bcryptjs');
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
    next();
});

module.exports = mongoose.model('User', userSchema);
