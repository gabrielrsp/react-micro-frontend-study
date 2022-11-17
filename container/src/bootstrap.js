import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartShow';
import 'cart/CartShow';
/* 
Quando o conteúdo desse arquivo é executado, presume-se que teremos acesso 
ao modulo que foi importado de 'products'

Por isso o index.js é executado primeiro para garantir que todos os codigos foram trazidos

*/

productsMount(document.querySelector('#my-products'))
cartMount(document.querySelector('#my-cart'))