const {
  calcularDescuento,
  validarPassword,
  celsiusAFahrenheit,
  esMayorDeEdad,
  generarNombreCompleto
} = require('./funciones.js');


// Ejercicio 1 — calcularDescuento
test('Descuento válido', () => {
  expect(calcularDescuento(1000, 20)).toBe(800);
});

test('Porcentaje inválido', () => {
  expect(calcularDescuento(300, 120)).toBe("Porcentaje inválido");
});

test('sin descuento', () => {
  expect(calcularDescuento(500, 0)).toBe(500);
});

// Ejercicio 2 — validarPassword
test('contraseña demasiado corta', () => {
  expect(validarPassword("contra")).toBe("Contraseña demasiado corta");
});

test('contraseña sin número', () => {
  expect(validarPassword("Contrasena")).toBe("Debe incluir un número");
});

test('contraseña sin mayúscula', () => {
  expect(validarPassword("contrasenad123")).toBe("Debe incluir una mayúscula");
});

test('contraseña válida', () => {
  expect(validarPassword("Contrasenad123")).toBe("Contraseña válida");
});

// Ejercicio 3 — celsiusAFahrenheit
test('convierte 0°C a 32°F', () => {
  expect(celsiusAFahrenheit(0)).toBe(32);
});

test('convierte 100°C a 212°F', () => {
  expect(celsiusAFahrenheit(100)).toBe(212);
});

// Ejercicio 4 — esMayorDeEdad
test('edad 25 es mayor de edad', () => {
  expect(esMayorDeEdad(18)).toBe(true);
});

test('edad 15 no es mayor de edad', () => {
  expect(esMayorDeEdad(17)).toBe(false);
});

// Ejercicio 5 — generarNombreCompleto
test('nombre completo', () => {
  expect(generarNombreCompleto("Berenice", "Ramírez")).toBe("Berenice Ramírez");
});

test('nombre completo incorrecto', () => {
  expect(generarNombreCompleto("Miguel", "") === "Miguel González").toBeFalsy();
});

