import { superheroe, usuario } from "./index.js";
// ^Dado el siguiente código, agrega las líneas necesarias para importar los dos objetos anteriores:

const { nombre, alias } = superheroe;
const { username, email, company: { name } } = usuario;
console.log(`Mi nombre es ${nombre} y soy ${alias}`);
console.log(`Usuario: ${username}`);
console.log(`Email: ${email}`);
console.log(`Compañia: ${name}`);

//^ Utiliza la desestructuración de objetos para simplificar el código anterior de la siguiente manera:
console.log(`Mi nombre es ${nombre} y soy ${alias}`);

console.log(`Usuario: ${username}`);
console.log(`Email: ${email}`);
console.log(`Compañia: ${name}`);
