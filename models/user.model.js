const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minLength: 6,
            maxLength: 50
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        dogType: {
            type: String,
            required: true
        },
        dogName: {
            type: String,
            required: true
        },
    });

    const User = mongoose.model('User', userSchema);

    module.exports = User;