console.log('restaurant.routes.js')


const RestaurantController = require('../controllers/restaurant.controller');

module.exports = (app) => {
    app.get("/api/restaurants",RestaurantController.index);
    app.post("/api/create/restaurant",RestaurantController.create);
    app.get("/api/restaurant/:id", RestaurantController.show );
    app.put("/api/update/restaurant/:id", RestaurantController.update);
    app.delete("/api/destroy/restaurant/:id",RestaurantController.destroy);
    app.post("/api/create/review/:restaurantId",RestaurantController.createReview);

}