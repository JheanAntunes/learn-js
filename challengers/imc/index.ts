//Formula IMC
let weight = 75;
let height = 1.75;

const calculateIMC = (weight: number, height: number) => {
  return weight / (height * height);
};

const imc = calculateIMC(weight, height);

const imcCondicion = (imc: number) => {
  const condition = [
    {
      condition: "Underweight",
      value: 18.5,
    },
    {
      condition: "Normal weight",
      value: 24.9,
    },
    {
      condition: "Overweight",
      value: 29.9,
    },
    {
      condition: "Obesity",
      value: Number.MAX_SAFE_INTEGER,
    },
  ];

  return condition.find((item) => imc <= item.value);
};
const result = imcCondicion(imc);

console.log(`result: ${result?.condition} with imc: ${imc}`);
