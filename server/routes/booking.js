import express from "express";
import {getOrders,addOrder,cancelOrder} from "../controllers/orders.js";

const router = express.Router();

router.get("/",getOrders)
router.post("/",addOrder)
router.delete("/",cancelOrder)

export default router;