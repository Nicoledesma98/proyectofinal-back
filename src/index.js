import express  from "express";
import {ProductManager} from "./controllers/ProductManager.js"

const app = express()
const PORT = 4000


const productManager = new ProductManager('src/models/productos.txt')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes
// app.use('/api/product', prodRouter)
app.get('/product/:id',async (req,res) =>{
    const productos = await productManager.getProducts()
    console.log(await productManager.getProducts()) ///llegan todos los productos
    const prueba  = productos.find( prod => prod.id === parseInt(req.params.id))
    console.log("esto es prueba",prueba)
    console.log(req.params.id)
    return res.status(200).json(prueba)
})
app.get('/product', async (req, res) => {
    const products = await productManager.getProducts();
    const limit = req.query.limit ? parseInt(req.query.limit) : products.length;
    const limitedProducts = products.slice(0, limit);
    console.log("esto es limitedproducts",limitedProducts)
    return res.status(200).json(limitedProducts);
  });
  app.post('/product', async (req,res) =>{
    let producto = await productManager.addProduct(req.body)
    res.send(producto)
})
app.delete('/product/:id', async (req, res) => {
    let producto = await productManager.deleteProduct(req.params.id) 
    res.send(producto)
})
app.put('/product/:id', async (req,res)=>{
    let producto = await productManager.updateProduct(req.params.id, req.body)
    res.send(producto)

})

app.listen(PORT,()=>{
    console.log (`server on port ${PORT}`)
})