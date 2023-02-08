// import { Router } from "express";
// import { ProductManager } from "../controllers/productManager";

// const productManager = new ProductManager('src/models/productos.txt')
// const prodRouter = Router()

// prodRouter.get('/:id',async (req,res) =>{
//     const productos = await productManager.getProducts()
//     console.log(await productManager.getProducts()) ///llegan todos los productos
//     const prueba  = productos.find( prod => prod.id === parseInt(req.params.id))
//     console.log("esto es prueba",prueba)
//     console.log(req.params.id)
//     return res.status(200).json(prueba)
// })
// prodRouter.get('/', async (req, res) => {
//     const products = await productManager.getProducts();
//     const limit = req.query.limit ? parseInt(req.query.limit) : products.length;
//     const limitedProducts = products.slice(0, limit);
//     console.log("esto es limitedproducts",limitedProducts)
//     return res.status(200).json(limitedProducts);
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