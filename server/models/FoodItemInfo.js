import mongoose from "mongoose";

const FoodItemSchema = mongoose.Schema({
    name: String,  
    itemid: String,     
    description: String,
    image: String,
    rating: {
        type: Number,
        default: 0,
    },
    ingredients: [String],
    cookingTime: String,
    veg: Boolean,
    tto:{               // Total Times Ordered
        type: Number,
        default: 0,
    },
})

var FoodItemInfo = mongoose.model('FoodItemInfo',FoodItemSchema);

export default FoodItemInfo;