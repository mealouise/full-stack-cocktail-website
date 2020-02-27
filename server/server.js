const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const CocktailSchema = require('./models/cocktails.model');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

app.get('/get-cocktails', (req,res) => { //created api called get-cocktails

    CocktailSchema.find({}, (err, cocktails) => {
        if (err) return res.render({err:err});
        res.send(cocktails) //calling the database to get the cocktail info e.g name,ingredients, image
    })
});
