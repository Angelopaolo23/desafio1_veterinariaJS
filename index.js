const fs = require('fs');
const { registrar, leer  }= require('./operaciones');

const informacionPaciente = process.argv.slice(2);

if(operacion === "registrar"){
    registrar(informacionPaciente);
}
if(operacion === "leer"){    
    leer();
};
