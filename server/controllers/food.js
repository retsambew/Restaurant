import foodModel from '../models/FoodItemInfo.js';

export const getFoods = async (req,res) => {
    try{
        const foodItems= await foodModel.find();

        res.status(200).json(foodItems);
    }catch(err){
        res.status(404).json({message: err.message})
    }
}

export const addFood = async (req,res) => {
    const { name, itemid, desc, img, ingr, cooktime, veg}=req.body;

    const foodItem=new foodModel({ name, itemid, desc, img, ingr, cooktime, veg});
    try{
        await foodItem.save();

        res.status(201).json(foodItem);
    }catch(err){
        console.log(err.message);
        res.status(409).json({message:err.message});
    }
}

export const removeFood = async (req,res) => {

}