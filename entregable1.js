const fs =require('fs')
const path="productos.json";

class ProductManager {
    static id = 0;
      
    constructor(path) {
      this.products = [];
      this.path=path
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      ProductManager.id++;
      const productExists = this.products.some((p) => p.code === code);
      if (productExists) {
        console.error(`Error: El código ${code} ya existe.`);
        return;
      }
      const product = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        id: ProductManager.id,
      };
      this.products.push(product);
      ProductManager.id++;
      this.saveData(this.products)
    }
  
    getProducts() {

      let mostarProd = fs.readFileSync("productos.json", "utf-8");
      let productos = JSON.parse(mostarProd)
      console.log(productos)
    
    }


    getProductById(id) {
      const data = fs.readFileSync("productos.json", "utf-8")
      const product=JSON.parse(data)
      const products = product.find((p) => p.id === id);
      if (products) {
        console.log("Este es su producto:", products);
      } else {
        console.error(`Error: Producto con id ${id} no encontrado.`);
      }
    }

    saveData(){
      let productos =JSON.stringify(this.products)
      
      fs.writeFileSync(path,productos)
     
      
    }
  }
  
  const productManager1 = new ProductManager(path);
  
  productManager1.addProduct("lechuga", "muy fresca", 100, "www.imagen", 1, 1000);
  productManager1.addProduct("tomate", "muy fresca", 100, "www.imagen", 2, 1000);
  productManager1.addProduct("ajo", "muy fresca", 100, "www.imagen", 2, 1000);
  
  productManager1.getProducts();
  productManager1.getProductById(1);

  
