import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3333;

// Define o caminho para os arquivos estáticos
app.use(express.static('./'));

// Rota para a raiz
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/songsavor.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
