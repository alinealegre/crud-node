# CRUD Node.js API com Docker e MySQL

Este projeto é uma API CRUD para gerenciar empresas, construída com Node.js, TypeScript, Express, Sequelize e MySQL. O projeto utiliza Docker para containerização.

## Funcionalidades

- CRUD para empresas, incluindo:
  - Razão Social
  - CNPJ (não modificável após cadastro)
  - Endereço, e-mails e telefones de contato
- Ambiente de desenvolvimento containerizado com Docker e Docker Compose

## Tecnologias

- Node.js
- Express
- TypeScript
- Sequelize (ORM)
- MySQL
- Docker e Docker Compose

## Instalação

1. Clone o repositório:
   git clone https://github.com/alinealegre/crud-node.git

2. Instale as dependências:
    npm install

3. Configure o arquivo .env com as credenciais do banco de dados.

## Executando o Projeto com Docker
  docker-compose up -d

Isso iniciará a API e o banco de dados MySQL em contêineres separados.


## Testando a API com Postman

Para facilitar os testes, é possível usar a coleção do Postman. Abaixo há duas opções de acesso: 

### 1. Importar o Arquivo Local

1. Baixe o arquivo `crud-node.postman_collection.json` na raiz do projeto.
2. No Postman, clique em **File > Import**.
3. Selecione o arquivo `crud-node.postman_collection.json`.
4. A coleção será importada para o Postman e estará pronta para uso.

### 2. Acessar a Documentação Online

Você também pode acessar [Documentação da API no Postman](https://www.postman.com/docking-module-geologist-57881386/empresas-api/documentation/nkfl9gu/empresa-crud-api?workspaceId=fb32b872-6d9c-47bf-a04a-9836a38ae51)
, que contém todas as rotas e detalhes de requisição.

A coleção inclui as rotas principais:
- **GET /empresas** - Lista todas as empresas
- **GET /empresas/:cnpj** - Busca uma empresa pelo CNPJ
- **POST /empresas** - Cria uma nova empresa
- **PUT /empresas/:id** - Atualiza uma empresa (exceto CNPJ)
- **DELETE /empresas/:id** - Exclui uma empresa