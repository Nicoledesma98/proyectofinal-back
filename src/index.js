const express =require("express") ;
const ProductManager = require("./models/ProductManager.js")

const productManager = new ProductManager()
productManager.resetTxt()

const app = express()
const PORT = 4000



app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/product/:id',async (req,res) =>{
    const productos = await productManager.getProducts()
    const prueba  = productos.find( prod => prod.id === parseInt(req.params.id))
    console.log("esto es prueba",prueba)
    console.log(req.params.id)
    return res.send(prueba)
})
app.get('/product', async (req, res) => {
    const products = await productManager.getProducts();
    console.log("esto es products en appget", products)
    const limit = req.query.limit ? parseInt(req.query.limit) : products.length;
    const limitedProducts = products.slice(0, limit);
    console.log("esti es limitedproducts", limitedProducts)
    return res.send(limitedProducts);
  });

  app.post('/product', async (req,res) =>{
    const producto = await productManager.addProduct(req.body)
    console.log("esto es products en apppost", producto)
    res.send(producto)
})
app.delete('/product/:id', async (req, res) => {
    const productos = await productManager.deleteProduct(req.params.id) 
    res.send(productos)
})
app.put('/product/:id', async (req,res)=>{
    let producto = await productManager.updateProduct(req.params.id, req.body)
    res.send(producto)

})

app.listen(PORT,()=>{
    console.log (`server on port ${PORT}`)
})