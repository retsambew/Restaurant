import bookModel from '../models/ReservationInfo.js';

export const getReservations = async (req,res) => {
    try{
        const bookings= await bookModel.find();

        res.status(200).json(bookings);
    }catch(err){
        res.status(404).json({message: err.message})
    }
}

export const addReservation = async (req,res) => {
    const {name, persons, from, till, date, phone}=req.body;

    const booking=new bookModel({name, persons, from, till, date, phone});
    try{
        await booking.save();

        res.status(201).json(booking);
    }catch(err){
        console.log(err.message);
        res.status(409).json({message:err.message});
    }
}

export const cancelReservation = async (req,res) => {

}
