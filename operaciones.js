const fs = require('fs');

const registrar = (informacionPaciente) => {
    const datos = JSON.parse(fs.readFileSync("citas.json", "UTF8"));
    const plantillaPaciente = {
    "Nombre": informacionPaciente[1], 
    "Edad": informacionPaciente[2], 
    "Tipo_de_animal": informacionPaciente[3], 
    "Color": informacionPaciente[4], 
    "Enfermedad": informacionPaciente[5]
    };
    datos.push(plantillaPaciente);
    fs.writeFileSync("citas.json", JSON.stringify(datos));
};

const leer = () => {
    const datos = JSON.parse(fs.readFileSync("citas.json", "UTF8"));
    datos.forEach(cita => console.log(cita));
};

module.exports = { registrar, leer};
