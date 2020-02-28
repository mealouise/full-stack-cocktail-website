const mongoose = require('mongoose');

const cocktailSchema = new mongoose.Schema({
    name: {type:String, required:true},
    description: {type:String, required:true},
    ingredients1: {type:String, required:true},
    ingredients2: {type:String, required:true},
    ingredients3: {type:String, required:true},
    ingredients4: {type:String, required:true},
    ingredients5: {type:String, required:false},
    ingredients6: {type:String, required:false},
    ingredients7: {type:String, required:false},
    ingredients8: {type:String, required:false},
    ingredients9: {type:String, required:false},
    ingredients10: {type:String, required:false},
    ingredients11: {type:String, required:false},
    ingredients12: {type:String, required:false},
    ingredients13: {type:String, required:false},
    ingredients14: {type:String, required:false},
    ingredients15: {type:String, required:false},
    image: {type:String, required:true}

});

module.exports = mongoose.model('recipes', cocktailSchema);
