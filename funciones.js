// Ejercicio 1 — Calculadora de descuento
const calcularDescuento = (precio, porcentaje) => {
    if (porcentaje < 0 || porcentaje > 100) {
        return "Porcentaje inválido";
    } else {
        const precioFinal = precio - (precio * porcentaje / 100);
        return precioFinal;
    }
};

//Ejercicio 2 — Validación de contraseña
const validarPassword = (password) => {
    if (password.length < 8) return "Contraseña demasiado corta";
    if (!/[0-9]/.test(password)) return "Debe incluir un número";
    if (!/[A-Z]/.test(password)) return "Debe incluir una mayúscula";
    return "Contraseña válida";
};

//Ejercicio 3 — Conversor de temperatura
const celsiusAFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32;
};

//Ejercicio 4 — Verificador de mayoría de edad
const esMayorDeEdad = (edad) => {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
};

//Ejercicio 5 — Generador de nombre completo
const generarNombreCompleto = (nombre, apellido) => {
    return nombre + " " + apellido;
};


module.exports = {
    calcularDescuento,
    validarPassword,
    celsiusAFahrenheit,
    esMayorDeEdad,
    generarNombreCompleto
};

