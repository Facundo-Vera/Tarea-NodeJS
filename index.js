//& Ejercicio 1
// ?Crear una clase Producto que contenga las siguientes propiedades:
// id
// nombre
// detalle
// marca
// precio
// stock
// *Crear 5 instancias de Producto y agregarlas a un array llamado “productos”
// *Crea un método estático en la clase Producto que reciba un array de productos y devuelva la suma de los precios unitarios.
// *Crea otro método estático en la clase Producto que reciba un array de productos y devuelva solo los productos que tengan stock

class Producto {
  constructor(id, nombre, detalle, marca, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.detalle = detalle;
    this.marca = marca;
    this.precio = precio;
    this.stock = stock;
  }
   static sumarPrecios(productos) {
    return productos.reduce((total, producto) => total + producto.precio, 0);
  }
  static productosConStock(productos) {
    return productos.filter(producto => producto.stock > 0);
  }
}
const productos = [
  new Producto(
    1,
    "Monitor 24/` ",
    "Monitor LED Full HD 75Hz",
    "Samsung",
    120000,
    8
  ),
  new Producto(
    2,
    "Teclado mecánico",
    "Teclado con retroiluminación RGB",
    "Redragon",
    45000,
    12
  ),
  new Producto(3,
      "Mouse gamer", 
      "Mouse óptico 7200 DPI",
      "Logitech", 
      35000,
       0),
  new Producto(
    4,
    "Notebook",
    "Core i5, 16GB RAM, SSD 512GB",
    "Lenovo",
    850000,
    5
  ),
  new Producto(
    5,
    "Auriculares",
    "Auriculares inalámbricos Bluetooth",
    "JBL",
    60000,
    3
  ),
];

console.log(Producto.sumarPrecios(productos));
console.log(Producto.productosConStock(productos))