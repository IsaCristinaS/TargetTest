/*3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;*/

var Data = require("./dados.json");

const valuesWithoutZeros = [];

Data.forEach((obj) => {
  if (obj.valor !== 0) valuesWithoutZeros.push(obj);
});

const numbers = valuesWithoutZeros.map((val) => val.valor);

const numbersLength = numbers.length;

const initialValue = 0;

const numbersSum = numbers.reduce(
  (acc, current) => acc + current,
  initialValue
);

const averageValue = (numbersSum / numbersLength).toFixed(2);

const minValue = Math.min(...numbers);

const maxValue = Math.max(...numbers);

const findDayAndValue = (array, value) => array.find((v) => v.valor === value);

const daysAboveAverage = valuesWithoutZeros.filter(value => value.valor > averageValue).length

console.log(
  "O menor valor de faturamento ocorrido em um dia do mês: ",
  findDayAndValue(valuesWithoutZeros, minValue)
);
console.log(
  "O maior valor de faturamento ocorrido em um dia do mês: ",
  findDayAndValue(valuesWithoutZeros, maxValue)
);

console.log("Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ", daysAboveAverage);
