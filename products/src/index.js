import('./bootstrap'); //chamada assincrona do bootstrap
/* 
  O import nesse formato de função irá carregar o bootstrap assincronamente
  permitindo o webpack identificar quais arquivos o codigo do index.js requer para rodar normalmente


  dessa forma com o webpack conseguindo identificar as necessidades de imports de lib, antes de rodar o codigo 
  ele webpack vai poder carregar as libs antes de executar o codigo de fato.
*/
