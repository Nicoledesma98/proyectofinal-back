import express  from "express";
import routerProd from "./routes/product.js";
import routerCart from "./routes/carts.js";
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import multer from "multer";


// const upload = multer({dest:'src/public/img'})///imagenes sin formato
const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,'src/public/img')
    },
    filename:(req,file,cb) => {
        cb(null, `${Date.now()}--${file.originalname}`)
    }
})
const upload = multer({storage : storage})
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const app = express()
const PORT = 4000


//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//Routes
app.use('/static',express.static(__dirname+'/public'))
app.use('/api/product',routerProd)
app.use('/api/carts',routerCart)/////falta poner routerCard
app.post('/upload', upload.single('product'),(req,res)=>{
    console.log(req.file)
    res.send('imagen cargada')
})



app.listen(PORT,()=>{
    console.log (`server on port ${PORT}`)
})