import orderModel from '../models/OrderInfo.js';

export const getOrders = async (req,res) => {
    try{
        const orders= await orderModel.find();

        res.status(200).json(orders);
    }catch(err){
        res.status(404).json({message: err.message})
    }
}

export const addOrder = async (req,res) => {
    const {oid, iid, address, phone}=req.body;

    const order=new orderModel({oid, iid, address, phone});
    try{
        await order.save();

        res.status(201).json(order);
    }catch(err){
        console.log(err.message);
        res.status(409).json({message:err.message});
    }
}

export const cancelOrder = async (req,res) => {

}
