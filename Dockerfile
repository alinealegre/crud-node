# Usa uma imagem leve Node.js
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos package.json e package-lock.json pro container
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o resto do código da aplicação pro container
COPY . .

# Expõe a porta que o servidor vai usar
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "run", "dev"]
