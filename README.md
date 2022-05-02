# REST-API-TypeScript

---

App desenvolvido para o desafio proposto pela Milenio Capital proposto no link https://gitlab.com/milenio-capital/desafio-dev-jr-pl e construido
baseado no tutorial do vídeo https://www.youtube.com/watch?v=XaDMIXuqNY8&amp;t=1973s.


## Começando
Faça o clone do repositório em sua máquina usando o link https://github.com/EfraimCancio/REST-API-TypeScript.git

## Pré-requisitos
Voçê tem que ter o nodeJs e o npm intalados na sua máquina para rodar a aplicação. Faça o download no link https://nodejs.org/en/download/.
Para as requisições HTTP voçe pode usar o Insomnia, baixando através desse link... https://insomnia.rest/download.
Para a visualização e formatação do banco de dados baixe o db browser for sqlite no link https://sqlitebrowser.org/dl/.

## Instalação
Para rodar o projeto, primeiramente instale os módulos do node com o comando: 
```
npm install
```
Em seguida crie um arquivo '.env' no diretório raiz do projeto e dentro dele crie uma variável de ambiente com o código:
```
DATABASE_FILE = ./challenge.db

```
Use o comando ```npm run dev``` para iniciar o servidor. Ele irá usar a porta http://localhost:8080/.
Caso o app não funcione, instale rode novamente os comando para instalação das dependências(express, sqlite3, dotenv e body-parser),  com os comandos:
```
npm i express @types/express
```
```
npm i sqlite3 @types/sqlite3
```
```
npm i dotenv @types/dotenv
```
```
npm i body-parser @types/body-parser
```

## Considerações

Até o momento consegui criar o primeiro e o segundo endpoint, sendo que travei no segundo endpoint pois na hora que faço o GET, os dados obtidos do BD
vem em um formato diferente do proposto pelo desafio, e eu ainda estou pesquisando como fazer para transforma-los em JSON. Embora ainda não tenha realizado 
a maioria dos requisitos propostos no desafio, esse projeto foi de grandem valia para o meu aprendizado e a minha evolução. Graças a esse projeto pude
aumentar o meu conhecimento a respeito de REST API e tenho certeza me aproximei mais do meu objetivo de me tornar um desenvolvedor fullstack. Gratidão! 


