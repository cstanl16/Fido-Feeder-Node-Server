const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
    {
        adID: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        comments: {
            type: String,
            required: false
        }
    });

    const Review = mongoose.model('Review', reviewSchema);

    module.exports = Review;