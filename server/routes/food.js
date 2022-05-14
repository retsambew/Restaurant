import express from "express";
import { getFoods,addFood,removeFood } from "../controllers/food.js";

const router = express.Router();

router.get("/",getFoods)
router.post("/",addFood)
router.delete("/",removeFood)

export default router;