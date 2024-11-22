const fs = require("fs");
const path = "./citas.json";

function registrarCita(
  nombreAnimal,
  edad,
  tipoAnimal,
  colorAnimal,
  enfermedad,
) {
  const nuevaCita = {
    nombreAnimal,
    edad,
    tipoAnimal,
    colorAnimal,
    enfermedad,
  };

  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
      return;
    }

    const citas = JSON.parse(data);

    citas.push(nuevaCita);

    fs.writeFile(path, JSON.stringify(citas, null, 2), (err) => {
      if (err) {
        console.error("Error al escribir en el archivo:", err);
      } else {
        console.log("Cita registrada correctamente.");
      }
    });
  });
}

function leerCitas() {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
      return;
    }

    const citas = JSON.parse(data);
    console.log("Citas registradas:");
    console.log(JSON.stringify(citas, null, 2));
  });
}

module.exports = { registrarCita, leerCitas };
