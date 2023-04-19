/* 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const valor = 100;
const formaPagamento = 1;

if (formaPagamento === 1){
  console.log(valor - 0.1 * valor); 
}
else if (formaPagamento === 2){
  console.log(valor - 0.15 * valor);
}
else if (formaPagamento === 3){
  console.log(valor);
}
else if (formaPagamento === 4){    //colocando só o else ele aceitaria formas de pagamento não existentes. Ex: formaPagamento = 5
  console.log(valor + 0.1 * valor);
}