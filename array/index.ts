const tabuada = (numero: number) => {
  const tabuada = Array.from({ length: numero }, (_, i) => i + 1).map(
    (i) => i * numero
  );
  return tabuada;
};
