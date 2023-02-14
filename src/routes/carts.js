import { Router } from "express";
import CartManager from "../controllers/CartManager.js";

const cartManager = new CartManager()
const routerCart = Router()

routerCart.get('/' , async (req,res) =>{
    const carrito = await cartManager.getCart()
    console.log('esto es carrito en getcart/metodo get',carrito)
    return res.send(carrito)
})

routerCart.post('/',async (req,res) =>{
    const carrito = await cartManager.creatCart()
    console.log('esto es post carrito',carrito)
    res.send(carrito)
})




export default routerCart
