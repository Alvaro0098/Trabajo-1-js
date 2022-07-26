/* menu de productos */

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

let producto1 = new Producto('hamburguesa', 500);
let producto2 = new Producto('pancho', 300);
let producto3 = new Producto('carlitos', 400);
let producto4 = new Producto('papas fritas', 200);
let producto5 = new Producto('gaseosa', 100);

const elegir_producto = () => {
  alert('elija un producto');
  alert('hamburguesa[1],pancho[2],carlitos[3],papas fritas[4], gaseosa[5]');
  let compro = parseInt(prompt('ingrese el numero de producto que quiera'));
  switch (compro) {
    case 1:   
      return producto1;
    case 2:
      return producto2;
    case 3:
      return producto3;
    case 4:
      return producto4;
    case 5:
      return producto5;
    default:
      alert('no eligio ningun producto');
  }
};

const calcular_cuotas = (elijaUnProducto) => {
  const cuotas = parseInt(
    prompt('ingrese las cuotas con las que quiere pagar')
  );
  let precioFinal;
  switch (cuotas) {
    case 3:
    case 6:
    case 12:
      precioFinal = elijaUnProducto.precio / cuotas;
      break;
    }
    alert('el costo en ' + cuotas + ' cuotas es ' + precioFinal);
};

const producto_elegido = elegir_producto(); /*guardar el retorno de la primer funcion*/
calcular_cuotas(producto_elegido); /*pasar como parametro el retorno de la primer funcion*/ 
