// let biggestPair = 0;
// let biggestOdd = 0;
// const entrada = [5, 3, 4, 1, 10, 8];

// const isEven = (num: number) => num % 2 === 0;
// const result = entrada.forEach((num) => {
//   if (isEven(num)) {
//     biggestPair = num > biggestPair ? num : biggestPair;
//   } else {
//     biggestOdd = num > biggestOdd ? num : biggestOdd;
//   }
// });

// const showResult = () => {
//   console.log(`maior numero: par ${biggestPair}, impar ${biggestOdd}`);
// };
// // saida: maior numero: par 10, impar 5

// showResult();

type Result = {
  biggestPair: number | null;
  biggestOdd: number | null;
};

const entrada: number[] = [5, 3, 4, 1, 10, 8];

const isEven = (num: number): boolean => num % 2 === 0;

const getBiggestPairAndOdd = (numbers: number[]): Result => {
  const initialResult: Result = { biggestPair: null, biggestOdd: null };

  return numbers.reduce((acc, num) => {
    if (isEven(num)) {
      acc.biggestPair =
        acc.biggestPair === null || num > acc.biggestPair
          ? num
          : acc.biggestPair;
    } else {
      acc.biggestOdd =
        acc.biggestOdd === null || num > acc.biggestOdd ? num : acc.biggestOdd;
    }
    return acc;
  }, initialResult);
};

const showResult = (result: Result): void => {
  console.log(
    `Maior número: par ${result.biggestPair ?? "nenhum"}, ímpar ${
      result.biggestOdd ?? "nenhum"
    }`
  );
};

// Uso do código
const result = getBiggestPairAndOdd(entrada);
showResult(result);
