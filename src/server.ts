import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import mustache from 'mustache-express';
import mainRouter from './routes/index';


//Variáveis de ambiente
dotenv.config();

//Início de configuração do Servidor
const server = express();

//Mustache
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

//Pasta pública
server.use(express.static(path.join(__dirname, '../public')));

//Rotas
server.use(mainRouter);
server.use((req, res) => {
    res.send('Página não encontrada');
});


server.listen(process.env.PORT);

//Fim de configuração do Servidor



