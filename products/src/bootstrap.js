import faker from 'faker'

/* 
Devido ao "import('./bootstrap')", que é um import assincrono, 
antes de rodar o código abaixo, será feito o fetch do faker 
devido a prop shared ser setada no webpackconfig, o que tras esse assincronismo do import
e impede a importação instantânea da lib
*/


const mount = (el) => {
  let products = '';

  for (let i = 0; i<5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products; // atribuindo products 

}

/*
Context/Situation #1
  - We are running this file in development in isolation
  - We are using our local index.html fila
  - Which DEFNITELY has an element with an id of 'dev-products
  - We want to immediately render our app into that element

*/

//process.env.NODE_ENV references the "mode" attribute on webpack file
if(process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');

  //Assuming our container doesnt have an element with id 'dev-products'
  if(el) {
    // we are probably running in isolation
    mount(el)
  }
}

/*
Context/Situation #2
  - We are running this file in development or production
  - THROUGH the CONTAINER app
  - NO GUARANTEE that an element with an id of 'dev-products"
  - we DO NOT WANT try to immediately render the app (because the containet might just use in an especific url, or based on a button click)
*/


export { mount }
//now we exported the mount function and use whenever we want to