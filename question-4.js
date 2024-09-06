/* 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.*/ //colocar todos em uma variável (array)
//somar os valores de todo no array
//calcular o percentual de cada estado

const valoresPorEstados = [
  { estado: "SP", valor: 67836.43 },
  { estado: "RJ", valor: 36678.66 },
  { estado: "MG", valor: 29229.88 },
  { estado: "ES", valor: 27165.48 },
  { estado: "Outros", valor: 19849.53 },
];

const valorInicial = 0;

const valorTotalMensal = valoresPorEstados.reduce(
  (acc, current) => acc + current.valor,
  valorInicial
);

const calculaPorcentagemTotal = (total, referencia) =>
  `${((100 * referencia) / total).toFixed(2)}%`;

const porcentagemFormatada = valoresPorEstados.map((resultado) => ({
  estado: resultado.estado,
  porcentagem: calculaPorcentagemTotal(valorTotalMensal, resultado.valor),
}));

console.log(porcentagemFormatada);
