import express from "express"
import { addToCart,removeFromCart,getCart } from "../controllers/cartController"
import { get } from "mongoose";

const cartRouter = express.Router();

cartRouter.post("/add". addToCart)
cartRouter.post("/remove", removeFromCart)
cartRouter.post("/get",getCart)

export default  cartRouter;