function findSubsetWithSum(M: number[], N: number): number[] | null {
    // Validar entradas
    if (!Array.isArray(M) || typeof N !== "number") {
      throw new Error("Invalid input: M should be an array and N should be a number.");
    }
  
    // Usar un conjunto para rastrear complementos de manera más eficiente
    const seen = new Set<number>();
  
    for (const num of M) {
      const complement = N - num;
  
      // Verificar si el complemento existe en el conjunto
      if (seen.has(complement)) {
        return [complement, num];
      }
  
      // Agregar el número actual al conjunto
      seen.add(num);
    }
  
    // Devolver null si no se encuentra un subconjunto
    return null;
  }
  
  // Ejemplo de uso
  const M = [2, 5, 8, 14, 0];
  const N = 10;
  const result = findSubsetWithSum(M, N);
  
  console.log(result); // salida esperada: [2, 8]
  