// import { Router } from "express";
// import  ProductManager  from "../controllers/ProductManager.js";

// const productManager = new ProductManager()
// const prodRouter = Router()

// prodRouter.get('/:id',async (req,res) =>{
//     const productos = await productManager.getProducts()
//     const prueba  = productos.find( prod => prod.id === parseInt(req.params.id))
//     console.log(req.params.id)
//     return res.send(JSON.stringify(prueba))
// })
// prodRouter.get('/', async (req, res) => {
//     const products = await productManager.getProducts();
//     const limit = req.query.limit ? parseInt(req.query.limit) : products.length;
//     const limitedProducts = products.slice(0, limit);
//     return res.send(JSON.stringify(limitedProducts));
//   });
// prodRouter.post('/', async (req,res) =>{
//     let producto = await productManager.addProduct(req.body)
//     res.send(producto)
// })
// prodRouter.delete('/:id', async (req, res) => {
//     let producto = await productManager.deleteProduct(req.params.id) 
//     res.send(producto)
// })
// prodRouter.put('/:id', async (req,res)=>{
//     let producto = await productManager.updateProduct(req.params.id, req.body)
//     res.send(producto)

// })

// export default prodRouter