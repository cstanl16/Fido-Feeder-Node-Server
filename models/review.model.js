const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
    {
        reviewerUsername: {
            type: String,
            required: true,
            unique: false,
            trim: true,
            minLength: 3,
            maxLength: 50
        },
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