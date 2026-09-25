# Jest_PruebasUnitarias
Desarrollar pruebas unitarias básicas utilizando Jest

# Proyecto de Pruebas Unitarias con Jest

Este proyecto contiene varias funciones básicas en JavaScript y sus respectivas pruebas unitarias utilizando **Jest**.

---

## Funciones implementadas

1. **calcularDescuento(precio, porcentaje)**  
   - Calcula el precio final aplicando un porcentaje de descuento.  
   - Valida que el porcentaje esté entre 0 y 100.  
   - Devuelve `"Porcentaje inválido"` si el porcentaje no es válido.

2. **validarPassword(password)**  
   - Verifica que la contraseña tenga al menos 8 caracteres.  
   - Debe incluir al menos un número y una mayúscula.  
   - Devuelve mensajes de error específicos o `"Contraseña válida"`.

3. **celsiusAFahrenheit(celsius)**  
   - Convierte grados Celsius a Fahrenheit usando la fórmula `(celsius * 9/5) + 32`.

4. **esMayorDeEdad(edad)**  
   - Devuelve `true` si la edad es mayor o igual a 18.  
   - Devuelve `false` si es menor.

5. **generarNombreCompleto(nombre, apellido)**  
   - Une nombre y apellido en una sola cadena.  
   - Ejemplo: `"Miguel"`.

---

## Pruebas unitarias

Cada función tiene pruebas en el archivo `funciones.test.js`.

- **calcularDescuento**  
  - Caso válido: `(1000, 20) → 800`  
  - Caso inválido: `(300, 120) → "Porcentaje inválido"`  
  - Caso límite: `(500, 0) → 500`

- **validarPassword**  
  - `"abc"` → `"Contraseña demasiado corta"`  
  - `"Password"` → `"Debe incluir un número"`  
  - `"password123"` → `"Debe incluir una mayúscula"`  
  - `"Password123"` → `"Contraseña válida"`

- **celsiusAFahrenheit**  
  - `0°C → 32°F`  
  - `100°C → 212°F`

- **esMayorDeEdad**  
  - `18 → true`  
  - `17 → false`

- **generarNombreCompleto**  
  - `"Miguel", "González"` → `"Miguel Gonz´zlez"`  
  - Prueba negativa: `"Vanya", "Ramirez" === "Vanya Ramírez"` → `false` (usando `toBeFalsy`).

---

## Resultados esperados

- Todas las pruebas deben pasar en verde (`True`) al ejecutar `npm test`.  
- Los casos inválidos deben devolver los mensajes de error definidos.  
- Los casos límite aseguran que las funciones manejan correctamente valores extremos.

---

## Problemas encontrados durante el desarrollo

 - **Errores de sintaxis** (olvidar llaves, paréntesis).
- **Exportación de funciones**: al inicio se usó `module.exports = calcularDescuento`, lo que impedía importar varias funciones. Se corrigió con:
  ```js
  module.exports = { calcularDescuento, validarPassword, celsiusAFahrenheit, esMayorDeEdad, generarNombreCompleto };
  
 
