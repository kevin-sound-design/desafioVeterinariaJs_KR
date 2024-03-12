const fs = require('fs');

const citas = [];

const registrar = (nombreDelAnimal, edad, tipoDeAnimal, colorDeAnimal, enfermedad) =>{
  const registroAnimal = {
    nombre: nombreDelAnimal,
    edad: edad,
    animal: tipoDeAnimal,
    color: colorDeAnimal,
    enfermedad: enfermedad
  };

  const citasJson = fs.readFileSync('citas.json', 'utf-8');
  const citasRegistradas = JSON.parse(citasJson);

  if(citasRegistradas.length === 0){
    citas.push(registroAnimal);
  }else{
    citas.push(...citasRegistradas);
    citas.push(registroAnimal);
  }

  fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2));
  console.log("Cita registrada exitosamente");
}

const leer = () =>{
  console.log(fs.readFileSync('citas.json', 'utf-8'));
}


module.exports = {registrar, leer};
