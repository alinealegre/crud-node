# CRUD Node.js API with Docker and MySQL

This project is a CRUD API to manage companies, built with Node.js, TypeScript, Express, Sequelize, and MySQL. The project uses Docker for containerization.

## Features

CRUD operations for companies, including:

- **Razão Social** (Company Name)  
- **CNPJ** (Brazilian business ID – not editable after creation)  
- Address, contact emails, and phone numbers  
- Containerized development environment with Docker and Docker Compose

## Technologies

- Node.js  
- Express  
- TypeScript  
- Sequelize (ORM)  
- MySQL  
- Docker & Docker Compose

## Installation

Clone the repository:  
`git clone https://github.com/alinealegre/crud-node.git`

Install dependencies:  
`npm install`

Configure the `.env` file with your database credentials.

## Running the Project with Docker

```bash
docker-compose up -d

This will start the API and MySQL database in separate containers.

## Testing the API with Postman
To make testing easier, you can use the provided Postman collection. You have two options:

### 1. Import the Local File

Download the file crud-node.postman_collection.json from the project root.
In Postman, go to File > Import.
Select the crud-node.postman_collection.json file.
The collection will be imported and ready to use.

### 2. Access the Online Documentation

You can also access the Postman API Documentation (https://www.postman.com/docking-module-geologist-57881386/empresas-api/documentation/nkfl9gu/empresa-crud-api?workspaceId=fb32b872-6d9c-47bf-a04a-9836a38ae51), which includes all routes and request details.

Routes:

GET /empresas – List all companies
GET /empresas/:cnpj – Get a company by CNPJ
POST /empresas – Create a new company
PUT /empresas/:id – Update a company (except CNPJ)
DELETE /empresas/:id – Delete a company
