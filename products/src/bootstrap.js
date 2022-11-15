import faker from 'faker'

/* 
Devido ao "import('./bootstrap')", que é um import assincrono, 
antes de rodar o código abaixo, será feito o fetch do faker 
devido a prop shared ser setada no webpackconfig, o que tras esse assincronismo do import
e impede a importação instantânea da lib
*/

let products = '';

for (let i = 0; i<5; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}

// console.log(products)

document.querySelector('#dev-products').innerHTML = products; // atribuindo products 
