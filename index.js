const fs = require('fs');
const { registrar, leer  }= require('./operaciones');

const informacionPaciente = process.argv.slice(2);
const operacion = informacionPaciente[0];

if(operacion === "registrar"){
    registrar(informacionPaciente);
} else if(operacion === "leer"){    
    leer();
} else{
    console.log("Debe indicar como funcion 'registrar o 'leer', ademas del nombre del paciente, edad, tipo de animal, color y enfermedad")
}
