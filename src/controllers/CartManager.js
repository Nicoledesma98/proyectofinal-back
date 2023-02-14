import { promises as fs } from 'fs'

export default class CartManager {
    constructor(){
        this.path = './src/models/carrito.txt';
        this.products = [];
    }
    static idUnico() {
        if (this.idUnic) {
            this.idUnic++
        } else {
            this.idUnic = 1
        }
        return this.idUnic
    }

// const id = CartManager.idUnico()
//         const cart = {id,product:[]}
    creatCart = async () => {
        const cart = this.products
        await fs.writeFile(this.path, JSON.stringify(cart))
    }
    addCart = async (productoId) =>{
        const readCart = await this.getCart()
        const prueba =this.products.find(prod => prod.product === productoId)
        
        console.log('esto es prueba en addcart',prueba)
        if(prueba){
            prueba.quantity +=1;
            await fs.writeFile(this.path, JSON.stringify(prueba))
            return 'el producto ya existe,se modifico la cantidad'
        } else {
            prueba.push({product:productoId,quantity:1})
            await fs.writeFile(this.path, JSON.stringify(prueba))
            return 'producto agregado al carrito'
        }
    }

    
    getCart = async () => {
        const readCart = await fs.readFile(this.path, 'utf-8')
        console.log("esto es readporoduct en getproduct")
        return JSON.parse(readCart)

    }
}

