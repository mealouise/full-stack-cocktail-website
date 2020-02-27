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

app.get('/get-cocktails', (req,res) => { //created api called get-cocktails (2 apis - returns all cocktails and lets you search for cocktails)

    const searchTerm = req.query.searchTerm; //if search term inst passed it returns everything

    CocktailSchema.find({
        name: new RegExp(searchTerm, "i") //find all records wit partial terms e.g tea - for long island tea or even just a letter e.g m brings back mojito
    }, (err, cocktails) => {
        if (err) return res.render({err:err});
        res.send(cocktails) //calling the database to get the cocktail info e.g name,ingredients, image
    })
});

app.post('/add-cocktail', (req,res) => { //allows users to create their own cocktail recipes in a database
        const name = req.body.name;
        const ingredients1 = req.body.ingredients1;
        const ingredients2 = req.body.ingredients2;
        const ingredients3 = req.body.ingredients3;
        const ingredients4 = req.body.ingredients4;
        const ingredients5 = req.body.ingredients5;
        const ingredients6 = req.body.ingredients6;
        const ingredients7 = req.body.ingredients7;
        const ingredients8 = req.body.ingredients8;
        const ingredients9 = req.body.ingredients9;
        const ingredients10 = req.body.ingredients10;
        const ingredients11 = req.body.ingredients11;
        const ingredients12 = req.body.ingredients12;
        const ingredients13 = req.body.ingredients13;
        const ingredients14 = req.body.ingredients14;
        const ingredients15 = req.body.ingredients15;
        const image = req.body.image;

        CocktailSchema.create({
            name:name,
            ingredients1:ingredients1,
            ingredients2:ingredients2,
            ingredients3:ingredients3,
            ingredients4:ingredients4,
            ingredients5:ingredients5,
            ingredients6:ingredients6,
            ingredients7:ingredients7,
            ingredients8:ingredients8,
            ingredients9:ingredients9,
            ingredients10:ingredients10,
            ingredients11:ingredients11,
            ingredients12:ingredients12,
            ingredients13:ingredients13,
            ingredients14:ingredients14,
            ingredients15:ingredients15,
            image:image
        }, (err) => {

            if (err) {
                return res.send("Couldn't create record");
            }

            res.send("Record created");
        
        });
});
