import mongoose from "mongoose";

const ReservationSchema = mongoose.Schema({
    name: String,
    persons: Number,
    from: String,
    till: String,
    date: Date,
    phone: String
})

var ReservationInfo = mongoose.model('ReservationInfo',ReservationSchema);

export default ReservationInfo;