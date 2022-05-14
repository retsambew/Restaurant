import express from "express";
import { getReservations,addReservation,cancelReservation } from "../controllers/booking.js";

const router = express.Router();

router.get("/",getReservations)
router.post("/",addReservation)
router.delete("/",cancelReservation)

export default router;