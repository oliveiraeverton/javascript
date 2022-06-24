function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes); 
  
    const formatado = salarioHora.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  
    return formatado;
  
  }
// tipo number

const meuNumero = 3;

const primeiroNumero = 1;

//const segundoNumero = 2;

//const operacaoMatematica = primeiroNumero + segundoNumero;

//console.log(operacaoMatematica);


console.log(Math.round(12.4));
console.log(ganhoPorHora(103, 20));
