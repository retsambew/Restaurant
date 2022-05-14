import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({
    orderid: String,  
    itemid: [String],     
    address: String,
    phone: String,
})

var OrderInfo = mongoose.model('OrderInfo',OrderSchema);

export default OrderInfo;