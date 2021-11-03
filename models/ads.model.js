const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adSchema = new Schema(
    {
        adName: {
            type: String,
            required: true,
            unique: false,
            trim: true,
            minLength: 3,
            maxLength: 50
        },
        adCompany: {
            type: String,
            required: true
        }
    });

    const Ad = mongoose.model('Ad', adSchema);

    module.exports = Ad;