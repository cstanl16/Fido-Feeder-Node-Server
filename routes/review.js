const router = require('express').Router();
let Review = require('../models/review.model');

router.route('/').get((req, res) => {

    Review.find() 
        .then(review => res.json(review))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/add').post((req, res) => {
    console.log(req.body.username);
    console.log(req.body.adID);
    console.log(req.body.username);
    console.log(req.body.adID);
                
    const reviewerUsername = req.body.username;
    const adID= req.body.adID;
    const rating = req.body.rating;
    const comments = req.body.comments;

    const newReview = new Review({
        reviewerUsername,
        adID,
        rating,
        comments
    });

    newReview.save()
        .then(() => res.json('Review added!'))
        .catch(err => res.status(402).json('Error: ' + err));
});
  

module.exports = router;