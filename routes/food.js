const router = require('express').Router();
let Food = require('../models/food.model');

router.route('/').get((req, res) => {
    Food.find() //{username: req.params.username}
        .then(food => res.json(food))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const foodName = req.body.foodName;
    const foodType = req.body.foodType;
    const foodSafe = Number(req.body.foodSafe);
    const foodNotes = req.body.foodNotes;

    const newFood = new Food({
        foodName,
        foodType,
        foodSafe,
        foodNotes
    });

    newFood.save()
        .then(() => res.json('Food added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Food.findById(req.params.id)
        .then(food => res.json(food))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/username').get((req, res) => {
    Food.findByUsername(req.params.foodName)
        .then(food => res.json(food))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Food.findByIdAndDelete(req.params.id)
        .then(() => res.json('food item deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Food.findById(req.params.id)
        .then(food => {
            food.foodName = req.body.foodName;
            food.foodType = req.body.foodType;
            food.foodSafe = req.body.foodSafe;
            food.foodNotes = req.body.foodNotes;

            food.save()
                .then(() => res.json('Food item has been updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;