import express, { query } from 'express';
import './database/connection';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);
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




app.listen(3333);

//formas de lidar com banco de dados no backend
// driver nativo, query builder, ORM

