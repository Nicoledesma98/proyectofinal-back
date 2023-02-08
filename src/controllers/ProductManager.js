import { promises as fs } from 'fs'

 export class ProductManager {
    constructor() {
        this.path = 'C:/Users/nicolas/Desktop/proyectofinal-back/src/models/productos.txt'
    }
    static idUnico() {
        if (this.idUnic) {
            this.idUnic++
        } else {
            this.idUnic = 1
        }
        return this.idUnic
    }
    addProduct = async (title, description, price, thumbnail, code, stock) => {
        const readProduct = await this.getProducts()
        readProduct.push({
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: ProductManager.idUnico()
        }
        )
        await fs.writeFile("../models/productos.txt", JSON.stringify(readProduct))
        return "producto agregado con exito"
    }
    getProducts = async () => {
        const readProduct = await fs.readFile(this.path, 'utf-8')
        return JSON.parse(readProduct)
    }
    getProductById = async (id) => {
        // logica para obtener un producto por id
        console.log("estamos en getproduct")
        const readProduct = await this.getProducts()
        if (readProduct.find(producto => producto.id === id)) {
            console.log("id " + id + " encontrado")
            return readProduct
        }
        else return "producto con id " + id + " no encontrado"
    }
    updateProduct = async (id, title, description, price, thumbnail, code, stock,) => {
        const updatePr = await this.getProducts()
        console.log('esto es productId', id)
        const updateInd = updatePr.findIndex(producto => producto.id === id)
        updatePr[updateInd] = [{ id, title, description, price, thumbnail, code, stock }]
        await fs.writeFile("../models/productos.txt", JSON.stringify(updatePr))
        return updatePr[updateInd]
    }
    deleteProduct = async (id) => {
        const productTxt = await this.getProducts()
        if (productTxt.some(producto => producto.id === id)) {
            const fileProduct = productTxt.filter(producto => producto.id !== id)
            await fs.writeFile("../models/productos.txt", JSON.stringify(fileProduct))
            return fileProduct
        } else {
            return "no se encontro producto"
        }
    }
}
const products = new ProductManager()
const main = async () => {
    await fs.writeFile("../models/productos.txt", JSON.stringify([])) //iniciando el txt
    console.log(await products.addProduct("Cama Gato", "Cama para gato con corderito", "$2000", "cama-gato.jpg", "A123FDE", "210"))
    console.log(await products.addProduct("Cama Gato", "Cama para gato con corderito", "$2000", "cama-gato.jpg", "A123FDE", "210"))
    console.log(await products.getProducts())
    console.log("producto por id")
    console.log(await products.getProductById(1))
    console.log(await products.updateProduct(1, "Cucha de Perro", "Cucha de perro hecho con fibra", "$5000", "cucha-perro.jpg", "A4581EDE", "300"))
    console.log("funcion deleteproduct")
    console.log(await products.deleteProduct(2))

}
main()
