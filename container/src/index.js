import('./bootstrap'); 

/* 
Antes de executar o arquivo boostrap.js, é preciso fazer o fetch do projeto 'products', logo
este arquivo permite o WEBPACK busque por codigo javascript e ter certeza de que
todos os códigos foram buscados antes que bootstrap.js seja executado.

-> o WEBPACK primeiro executa este arquivo, que executa um main.js que vai buscar por codigos adicionais de products
-> depois executar o código dentro do bootstrap.js

*/

/*
    PROCESSO do WEBPACK DEV SERVER

    MAIN.JS {
        -> Entrou na localhost:8080
        -> Download e execução do main.js do container
        -> Executado o main, webpack identifica o REQUIRE dizendo que deve ser importado e executado o bootstrap.js
    }

    O Webpack dentro do browser, simultaneamente ao download do bootstrap, também ja realiza o download do arquivo 
    remoteEntry.js que vem da aplicação 'products' 

    Esse arquivo remoteEntry.js diz que para rodar o bootstrap é preciso baixar o src_index.js e o faker.js 
    então o webpack faz o download desse outros arquivos

    Agora que o webpack fez o download de todos os codigos o bootstrap e executado,
    
*/