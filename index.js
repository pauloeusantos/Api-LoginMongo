import express from 'express';
import mongoose from './config/config.js'; 
import routes from './routes/routes.js';

const app = express();

app.use(express.json());
app.use('/api', routes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));