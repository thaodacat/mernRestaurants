console.log('restaurant.model.js')


const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');


const ReviewSchema = new mongoose.Schema({
    rName:{
        type: String,
        required:[true, "Name is required"],
        minlength:[3,"At least 3 characters"]
    },

    rRating:{
        type: Number,
        required: [true, "Rating is required"],
        min:[1],
        max:[5, "1-5 only"]
        
    },

    rReview:{
        type:String,
        required: [true, "Review is required"],
        minlength:[3, "At least 3 characters"]
    }

},{timestamps:true})

const RestaurantSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Restaurant Name is required'],
        minlength:[3,"At least 3 characters"],
        unique: true
    },

    cuisine:{
        type: String,
        required:[true, "Cuisine type is required"],
        minlength:[3,"At least 3 characters"]
    },

    
    reviews : [ReviewSchema]

},{timestamps:true});


RestaurantSchema.plugin(uniqueValidator);


module.exports.Review = mongoose.model ('Review', ReviewSchema);
module.exports.Restaurant = mongoose.model ('Restaurant', RestaurantSchema);
