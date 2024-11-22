const { registrarCita, leerCitas } = require("./operaciones");

const args = process.argv.slice(2);

if (args[0] === "registrar") {
  const [nombreAnimal, edad, tipoAnimal, colorAnimal, enfermedad] =
    args.slice(1);

  if (!nombreAnimal || !edad || !tipoAnimal || !colorAnimal || !enfermedad) {
    console.log(
      "Por favor, ingresa todos los datos necesarios para registrar la cita.",
    );
  } else {
    registrarCita(nombreAnimal, edad, tipoAnimal, colorAnimal, enfermedad);
  }
} else if (args[0] === "leer") {
  leerCitas();
} else {
  console.log('Comando no reconocido. Usa "registrar" o "leer".');
}
