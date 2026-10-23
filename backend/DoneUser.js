const mongoose = require('mongoose');

const doneUserSchema = new mongoose.Schema({
    nameSocial: {
        type: String,
        required: true,
        unique: false,
    },
    fullName: {
        type: String,
        required: false,
    },
    cpf: {
        type: String,
        required: false,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    cep: {
        type: String,
        required: false,
        unique: false,
    },
    street: {
        type: String,
        required: false,
        unique: false,
    },
    neighborhood: {
        type: String,
        required: false,
        unique: false,
    },
    number: {
        type: String,
        required: false,
        unique: false,
    },
    city: {
        type: String,
        required: false,
        unique: false,
    },
    complement: {
        type: String,
        required: false,
        unique: false,
    },
    country: {
        type: String,
        required: false,
        unique: false,
    },
    dddTelphone: {
        type: Number,
        required: false,
        unique: false,
    },
    telphone: {
        type: Number,
        required: false,
        unique: false,
    },
    dddWhatsApp: {  
        type: Number,
        required: false,
        unique: false,
    },
    whatsApp: {
        type: Number,
        required: false,
        unique: false,
    },
    isProfessor: {
        type: Boolean,
        required: false,
        unique: false,
        default: false
    },
    password: {
        type: String,
        required: true
    },    
});

doneUserSchema.pre('save', function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    const bcrypt = require('bcryptjs');
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
    next();
});

module.exports = mongoose.model('DoneUser', doneUserSchema);