const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        name: {
            type: String,
            required: true
        },
        email: {
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