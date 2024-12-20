import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = process.env.MONGO_URI;

mongoose.set('strictQuery', false);

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB com sucesso'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

export default mongoose;

