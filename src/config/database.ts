import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Carrega variáveis do arquivo .env
dotenv.config(); 

const sequelize = new Sequelize(
  process.env.DB_NAME || 'empresa_db',      
  process.env.DB_USER || 'root',             
  process.env.DB_PASSWORD || 'root',         
  {
    host: process.env.DB_HOST || 'localhost', 
    dialect: 'mysql',                          
    logging: false,                            
  }
);

export default sequelize;
