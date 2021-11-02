const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {

    User.find() //{username: req.params.username}
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const name = req.body.name;
    const email = req.body.email;
    const dogType = req.body.dogType;
    const dogName = req.body.dogName;

    const newUser = new User({
        username,
        name,
        email,
        dogType,
        dogName
    });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;