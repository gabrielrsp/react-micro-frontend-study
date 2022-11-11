import faker from 'faker'

const carText = `<div>You have ${faker.random.number()} itens in your cart </div>`;

document.querySelector('#cart-dev').innerHTML = carText;