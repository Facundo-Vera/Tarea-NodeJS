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
    return productos.filter((producto) => producto.stock > 0);
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
  new Producto(3, "Mouse gamer", "Mouse óptico 7200 DPI", "Logitech", 35000, 0),
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
console.log(Producto.productosConStock(productos));

//&Ejercicio 2
//*Dados los siguientes arrays:
//*Usa el operador Spread para unir ambos arrays y obtener el número máximo.

let num1 = [23, 56, 3, 67];
let num2 = [100, 456, 2, 347];

let numeros = [...num1, ...num2];
let maximo = Math.max(...numeros); //~devuelve el numero maximo de una lista de valores no de un array
console.log(maximo);

//& Ejercicio 3
//*Tenemos estos dos objetos:
// ?Usando spread operator y desestructuración de objetos necesitamos crear un nuevo objeto que contenga la
// ?propiedad brand de ---myVehicle--- y todas las propiedades de ---updateMyVehicle---

const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};

const { brand } = myVehicle;
const nuevoObjeto = { brand, ...updateMyVehicle };
console.log(nuevoObjeto);



// &Ejercicio 4
//* Dado el siguiente código:
//? Usar el operador ternario para simplificar el condicional.

let isActive = true;
// if (isActive) {
//   console.log("Activado");
// } else {
//   console.warn("No está activado");
// }
console.log(isActive ? "Activado " : "No está activado")



// &Ejercicio 5
// *Dado el siguiente código:

//^ Realiza las modificaciones necesarias para que se puedan exportar ambos objetos
 export let superheroe = {
  alias: "Batman",
  nombre: "Bruce Wayne",
  habilidad: "resolver problemas y misterios",
};

 export const usuario = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};



