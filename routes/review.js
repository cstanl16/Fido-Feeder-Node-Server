const router = require('express').Router();
let Review = require('../models/review.model');

router.route('/').get((req, res) => {

    Review.find() 
        .then(review => res.json(review))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/add').post((req, res) => {
    const reviewerUsername = req.body.username;
    const adId = req.body.adId;
    const rating = req.body.rating;
    const comments = req.body.comments;

    const newReview = new Review({
        reviewerUsername,
        adId,
        rating,
        comments
    });

    newReview.save()
        .then(() => res.json('Review added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;