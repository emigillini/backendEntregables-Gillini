
class ProductManager {
    static id = 0;
      
    constructor() {
      this.products = [];
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
    }
  
    getProducts() {
      console.log(this.products);
    }
  
    getProductById(id) {
      const product = this.products.find((p) => p.id === id);
      if (product) {
        console.log(`Este es su producto:`, product);
      } else {
        console.error(`Error: Producto con id ${id} no encontrado.`);
      }
    }
  }
  
  const productManager1 = new ProductManager();
  
  productManager1.addProduct("lechuga", "muy fresca", 100, "www.imagen", 1, 1000);
  productManager1.addProduct("tomate", "muy fresca", 100, "www.imagen", 2, 1000);
  productManager1.addProduct("ajo", "muy fresca", 100, "www.imagen", 2, 1000);
  
  productManager1.getProducts();
  productManager1.getProductById(1);

  
