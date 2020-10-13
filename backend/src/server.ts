import express, { query } from 'express';
import 'express-async-errors';
import cors from 'cors';
import './database/connection';
import path from 'path';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler)
app.listen(3333);


//rota = conjunto
//recurso = usuario

//Métodos HTTP: GET, POST, PUT, DELETE

//GET: buscando informação
//POST: criando informação
//PUT: editando informação
//DELETE: deletando informação


//tipos de parametros
//Query params: http://localhost:3333/users?search=diego (parametros de busca 'diego', pode ter outros parametros concatenados com $)
//Route Params: http://localhost:3333/users/1 (identificar um recurso (no caso usuario com id 1))
//Body: http://localhost:3333/users/1 




//formas de lidar com banco de dados no backend
// driver nativo, query builder, ORM

