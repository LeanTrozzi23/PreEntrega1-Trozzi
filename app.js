function pedirNombre() {
  let nombre = prompt("Ingrese su nombre:");
  return nombre;
}
function pedirApellido() {
  let apellido = prompt("Ingrese su apellido:");
}
function pedirEdad() {
  let edad = prompt("Ingrese su edad:");
  while (edad === "" || edad <= 0) {
    alert("La edad ingresada no es válida ⛔");
    edad = prompt("Ingrese su edad:");
  }
  return edad;
}
let nombre = pedirNombre();
let apellido = pedirApellido();
let edad = pedirEdad();

let mensaje;

while (edad === "" || edad <= 17) {
  alert(
    "La edad ingresada no es válida ⛔. Debes ser mayor de edad o estar acompañado de un adulto responsable."
  );
  edad = pedirEdad();
}
if (edad > 17) {
  mensaje =
    "Eres mayor de edad, ya puedes realizar compras en nuestro sitio ✅";
}
alert(mensaje);
alert("¡Bienvenido, " + nombre + "!");
console.log("¡Bienvenido, " + nombre + "!");

let producto;
let cantidad;
let precioPorUnidad;
let total;

do {
  producto = prompt("Ingrese el producto (remera, buzo o conjunto):");
  if (producto === "remera" || producto === "buzo" || producto === "conjunto") {
    break;
  } else {
    alert("Producto no válido. Por favor, ingrese remera, buzo o conjunto.");
  }
} while (true);

if (producto === "remera") {
  precioPorUnidad = 25000;
} else if (producto === "buzo") {
  precioPorUnidad = 35000;
} else {
  precioPorUnidad = 70000;
}

do {
  cantidad = prompt("Ingrese la cantidad de productos a comprar:");
  if (cantidad > 0) {
    break;
  } else {
    alert("Cantidad no válida, por favor ingrese cantida mayor a 0.");
  }
} while (true);

total = precioPorUnidad * cantidad;

alert(
  "Producto: " +
    producto +
    "\nCantidad: " +
    cantidad +
    "\nTotal de la compra: " +
    total
);

let mensajeTotal =
  "Producto = " +
  producto +
  "\n" +
  "Cantidad = " +
  cantidad +
  (cantidad === 1 ? " Unidad" : " Unidades") +
  "\n" +
  "Total de la compra = $" +
  total;
console.log(mensajeTotal);
alert("¡Gracias por su compra!");
