const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { 
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection has been established");
});

const userRouter = require('./routes/user');
const foodRouter = require('./routes/food');
const adRouter = require('./routes/ad');
const reviewRouter = require('./routes/review');

app.use('/user', userRouter);
app.use('/food', foodRouter);
app.use('/ad', adRouter);
app.use('/review', reviewRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});