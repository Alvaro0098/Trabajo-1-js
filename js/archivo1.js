/* menu de productos */

/////////////////////////////////////////////arrays////////////////////////////////////////////////
// const cafe = ["cafe, educorante"]
// const nombres = ["mate", "termo", "agua", "yerba", "matera"];
// for (let i=0 ; i < nombres.length ; i++){
//     console.log(nombres[i]);
// }

// //Metodos//
// nombres.unshift("galletitas") // agrega un elemento al comienzo
// nombres.push("azucar") //agrega un elemento al arreglo al final
// nombres.pop() // elimina el ultimo elemento del arreglo
// nombres.shift() // elimina el primer elemento del arreglo
// nombres.splice(1,3) // elimina uno o varios elementos
// nombres.reverse() // da vuelta el arreglo
// copia = nombres.slice(1,4) // genera una copia sin incluir el ultimo
// nombres.log(nombres.length) // 6 --> devuelve la cantidad de elemetos que contiene el arreglo
// console.log(nombres) // "mate", "termo", "agua", "yerba", "matera"
// console.log(nombres.join("-")) //permite agregar cosas entre los arreglos
// console.log(nombres.indexOf("termo")) // devuelve en que indexacion esta 1
// const otro = nombres.concat(cafe)

/////////////////////////////////ejemplo 1 ////////////////////////////////////////////////////
// const miarreglo = [""]; //array vacio
// let cantidad = 5;

// do{
//     let entrada = prompt("ingresar nombre");
//     miarreglo.push(entrada.toUpperCase());
//     console.log(miarreglo.length);
    
// }while(miarreglo.length != cantidad)

// alert(miarreglo)

/////////////////////////////////ejemplo 2 /////////////////////////////////////////////////////
class Producto {
  constructor(id, nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.id = id;
  }
}


const productos = []; 
productos.push(new Producto( 1 ,"hamburguesa", 500))    
productos.push(new Producto( 2 ,"pancho", 300))
productos.push(new Producto( 3 ,"carlitos", 400))
productos.push(new Producto( 4 ,"papas fritas", 200))
productos.push(new Producto( 5 ,"gaseosa", 100))




const elegir_producto = () => {

  let elegir = ""

  for (const index of productos){
    elegir = elegir + "\n" + index.id  + " " + index.nombre + " " + index.precio 
  }
  

  let compro = parseInt(prompt("elija un producto" + "\n" + elegir));

  while( isNaN(compro) || compro < 1 || compro > productos.length) {
    compro = parseInt(prompt(`ingrese un numero que este en el menu ${elegir}`)) ;
  }
  return productos[compro - 1]
}

let producto = elegir_producto()
console.log(producto)


const cuotas_disponibles = [3,6,12];


let texto_cuotas = ""

for (const cuota of cuotas_disponibles.entries()){

  texto_cuotas = `${texto_cuotas} \n ${cuota[0] + 1}.${cuota[1]}`
}


alert(texto_cuotas)
let cuota_elegida = parseInt(prompt(texto_cuotas))


if (cuota_elegida == 1)
  alert(producto.precio / 3)
else if (cuota_elegida == 2)
  alert(producto.precio / 6)
else
  alert(producto.precio/12)


//console.log(texto_cuotas)


  





// const nombres = ["mate", "termo", "agua", "yerba", "matera"];

// const eliminar = (nombre) => {
//     let index = nombres.indexOf(nombre)
//     if (index != -1)
//     nombres.splice(index,1)
// }

// eliminar("")

///////////////////////////////////////////////////mayor edad////////////////////////////////////////////////////////////////////////////////////////

// class Persona{
//   constructor(edad){
//     this.edad = edad
//   }
// }

// let alvaro = new Persona(23)
// let juan = new Persona(12)
// let guada = new Persona(18)

// const mayor_edad = () => {
//   alert("elija de que persona quiere consultar su mayoria de edad")
//   alert("alvaro[1], juan[2], guada[3]")
//   let persona = parseInt(prompt('ingrese la persona'));
//     switch(persona){
//       case 1:
//         return alvaro
//       case 2:
//         return juan
//       case 3:
//         return guada

//     }
  
// }


// const calcular_edad = (personaparametro) => {
//   const edad_persona = personaparametro.edad
//   if (edad_persona > 18)
//     alert("es mayor de edad")
//   else if(edad_persona<18)
//     alert("es menor de edad")
//   else
//     alert("es mayor de edad")
// }

// const calculoedad = mayor_edad()
// calcular_edad(calculoedad)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////Programita stock////////////////////////////////////////////////////////////////////////////
// class Producto{
//   constructor(nombre, precio, stock){
//     this.nombre = nombre
//     this.precio = precio
//     this.stock = stock
//   }
  
// }

// let producto1 = new Producto("raqueta", 20000, 50)
// let producto2 = new Producto ("pelota", 1000, 200)
// let producto3 = new Producto ("polvo", 800, 1000)

// const eleccion_producto_stock = () => {
//   alert("elija un producto del que quiersa saber el stock")
//   alert("raqueta[1], pelota[2], polvo[3]")
//   let eligio = parseInt(prompt('ingrese el numero de producto que quiera'));
//   switch (eligio){
//     case 1:
//       return producto1
//     case 2:
//       return producto2
//     case 3:
//       return producto3
//   }
// }

// const averiguar_stock = (stockproducto) => {
//   let stockdeproducto;
//   stockdeproducto = stockproducto.stock
//   alert ("el stock de " + stockproducto.nombre + " es " + stockdeproducto)

// }


// const calculando_stock = eleccion_producto_stock()
// averiguar_stock(calculando_stock)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//////////////////////////////////////programita producto cuotas/////////////////////////////////////////////////////////////////////////////////////////////


// const calcular_cuotas = (elijaUnProducto) => {
//   let cuotas = parseInt(prompt(`ingrese la cantidad de cuotas con las que va a abonar
//   3 - 6 - 12`));
//   while( isNaN(cuotas) || (cuotas != 3 && cuotas != 6 && cuotas != 12)){
//     cuotas = parseInt(prompt(`Ingrese un numero correcto
//     3 - 6 - 12`));
//   }
//   let precioFinal;
//   switch (cuotas) {
//     case 3:
//     case 6:
//     case 12:
//       precioFinal = elijaUnProducto.precio / cuotas;
//       break;
//     }
//     alert('el costo en ' + cuotas + ' cuotas es ' + precioFinal);
// };

// const producto_elegido = elegir_producto(); /*guardar el retorno de la primer funcion*/
// calcular_cuotas(producto_elegido); /*pasar como parametro el retorno de la primer funcion*/ 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////