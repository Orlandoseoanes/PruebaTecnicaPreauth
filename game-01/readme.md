# Subconjunto con Suma Específica

Este repositorio contiene la solución al problema de encontrar el primer subconjunto de dos números en un conjunto dado cuya suma sea igual a un número específico `N`.

## Descripción del Problema

Dado un conjunto no vacío de números enteros `M` y un número entero `N`, se debe encontrar el primer subconjunto de dos números de `M` cuya suma sea exactamente igual a `N`.

### Ejemplo
- Entrada: `M = [2, 5, 8, 14, 0]`, `N = 10`
- Salida: `[2, 8]`

## Implementación

La solución está implementada en TypeScript. Utiliza un enfoque eficiente basado en un conjunto (`Set`) para realizar la búsqueda en tiempo lineal.


## Cómo Ejecutar

### Requisitos
- Node.js instalado.
- TypeScript instalado globalmente:
  ```bash
  npm install -g typescript
  ```

### Pasos

1. Guarda el código en un archivo llamado `reto1.ts`.
2. Compila el archivo a JavaScript:
   ```bash
   tsc reto1.ts
   ```
3. Ejecuta el archivo compilado:
   ```bash
   node reto1.js
   ```

### Opción Alternativa: Ejecutar Directamente con `ts-node`
Si prefieres no compilar manualmente:

1. Instala `ts-node`:
   ```bash
   npm install -g ts-node
   ```
2. Ejecuta el archivo directamente:
   ```bash
   ts-node reto1.ts
   ```

## Explicación de la Solución

1. **Validación de Entradas**:
   - Se verifica que `M` sea un arreglo y `N` sea un número.

2. **Uso de Conjunto (`Set`)**:
   - Un conjunto se utiliza para almacenar los complementos necesarios, logrando así una búsqueda eficiente en tiempo \(O(n)\).

3. **Lógica Principal**:
   - Para cada número en `M`, se calcula el complemento necesario (`N - num`).
   - Si el complemento ya existe en el conjunto, se devuelve el par como solución.

4. **Retorno**:
   - Devuelve el primer subconjunto encontrado o `null` si no hay solución.

## Contribuciones

Las contribuciones son bienvenidas. Si tienes mejoras o sugerencias, abre un issue o un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.

