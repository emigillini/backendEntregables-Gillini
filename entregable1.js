

class ProductManager{
    static id= 0
    static products=[];

    constructor(title, description, price, thumbnail, code, stock){

        this.title=title;
        this.description=description;
        this.price=price;
        this.thumbnail=thumbnail;
        this.code=code;
        this.stock=stock;
        this.id= ++ProductManager.id   
        
    }
    static addProducts(prod){
        const productExists = ProductManager.products.some((p) => p.code === prod.code);
        if (productExists) {
        console.error(`Error: El código ${prod.code} ya existe.`);
        return;
    }
        ProductManager.products.push(prod)
    }
    static getProducts(){
        console.log(ProductManager.products)
    }
    static getProductById(id){
        const product = ProductManager.products.find(p => p.id === id);
        if(product){
            console.log(`Este es su producto:`, product);
        } else {
            console.error(`Error: Producto con id ${id} no encontrado.`);
        }
    }
}

lechuga = new ProductManager("lechuga", "muy fresca", 100, "www.imagen",1,1000)
tomate = new ProductManager("tomate", "muy fresca", 100, "www.imagen",2,1000)
ajo = new ProductManager("ajo", "muy fresca", 100, "www.imagen",2,1000)

ProductManager.addProducts(lechuga)
ProductManager.addProducts(tomate)
ProductManager.addProducts(ajo)

ProductManager.getProducts()
ProductManager.getProductById(1)

