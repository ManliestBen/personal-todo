var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shoppingSchema = new Schema({
    item: {type: String, required: true},
    category: {type: String, 
               enum: ["Deli", "Bakery", "Produce", "Seafood", "Dry/Canned", "Meats", "Frozen", "Beverage", "Dairy", "Paper Goods", "Cleaning", "Hygiene"]
              }
},{
    timestamps: true
});

module.exports = mongoose.model('Shopping', shoppingSchema);