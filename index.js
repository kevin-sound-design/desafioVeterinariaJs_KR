const {registrar, leer} = require('./operaciones.js')

const operacion = process.argv.slice(2);

if(operacion[0] === "registrar"){
  registrar(operacion[1], operacion[2], operacion[3], operacion[4], operacion[5])
}else if(operacion[0] === "leer"){
  leer()
}else{
  console.log("la operación requerida no se encuentra en las opciones disponibles");
}
  
