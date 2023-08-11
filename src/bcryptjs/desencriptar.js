// Importamos paquete
const bcrypt = require("bcryptjs");
// Este hash debe venir de tu base de datos, por ejemplo
// Nota: yo sé que este hash es "hunter2", obviamente es para ejemplificar
const palabraSecretaHasheada = "$2a$10$WPU3OE2XqtInbn0aDM5eg.DIiOnR9FBt6oem0WxcTf1awaHXpWLtS";
const palabraSecretaProporcionadaPorUsuario = "Fredanger23";
// Recuerda. Los argumentos son: texto plano, encriptada, y callback
bcrypt.compare(palabraSecretaProporcionadaPorUsuario, palabraSecretaHasheada, (err, coinciden) => {
	if (err) {
		console.log("Error comprobando:", err);
	} else {
		console.log("¿La contraseña coincide?: " + coinciden);
	}
});