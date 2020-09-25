console.log('restaurant.controller.js')

const {Restaurant, Review} = require("../models/restaurant.model");


module.exports = {
    index:(req,res) => {
        Restaurant.find().sort('name')
        
        // .aggregate([
        //     {$unwind:"$reviews" },
        //     {$sort: {"reviews.rRating" : -1}}
        //     {$group: {_id: "$_id", reviews : {$push:"$review"}} },
        // ])
            .then(data => res.json({results:data}) )
            .catch(err => res.json(err.errors))
    },
    create:(req,res) => {
        Restaurant.create(req.body)
            .then(data => res.json({results:data}) )
            .catch(err => res.json(err.errors))
    },
    
    show:(req,res) => {
        Restaurant.findOne({_id:req.params.id}).sort({ "reviews.rRating" : -1 })
            .then(data => res.json({results:data}) )
            .catch(err => res.json(err.errors))
    },
    update:(req,res) => {
        Restaurant.findOneAndUpdate({_id:req.params.id},req.body,{new:true,useFindAndModify:false, runValidators:true, context: 'query'})
            .then(data => res.json({results:data}) )
            .catch(err => res.json(err.errors))
    },
    destroy:(req,res) => {
        Restaurant.deleteOne({_id:req.params.id})
            .then(data => res.json({results:data}) )
            .catch(err => res.json(err.errors))
    },
    createReview:(req,res) => {
        Review.create(req.body)
        .then(review => {
            Restaurant.findOneAndUpdate({_id:req.params.restaurantId}, {$push:{reviews:review}})
                .then(restaurant => res.redirect(`/api/restaurant/${req.params.restaurantId}`))
                .catch(err => res.json(err.errors));
        })
        .catch(err => res.json(err.errors))
    },

}