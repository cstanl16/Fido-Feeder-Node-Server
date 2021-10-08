const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema(
    {
        foodName: {
            type: String,
            required: true,
            unique: false,
            trim: true,
            minLength: 3,
            maxLength: 50
        },
        foodType: {
            type: String,
            required: true
        },
        foodSafe: {
            type: String,
            required: true
        },
        foodNotes: {
            type: String,
            required: false
        }
    });

    const Food = mongoose.model('Food', foodSchema);

    module.exports = Food;