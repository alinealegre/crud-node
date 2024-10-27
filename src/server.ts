import express from 'express';
import sequelize from './config/database';
import empresaRoutes from './routes/empresaRoutes';

const app = express();
app.use(express.json());

app.use('/empresas', empresaRoutes);

sequelize.sync().then(() => {
    console.log('Banco de dados sincronizado com sucesso.');
  }).catch((error) => {
    console.error('Erro ao sincronizar o banco de dados', error);
  });
  
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });

