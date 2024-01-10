import express from "express";
import createError from "http-errors";
import database from "./db/database.js";
import contest_router from "./routes/contest.router.js";
import competitionsRouter from './routes/competitions.router.js';
import athletesRouter from './routes/athletes.router.js';
import resultsRouter from './routes/results.router.js';

const sequelize = database;
const host = '0.0.0.0';
const port = 3000;

// Start express
const app = express();
app.use(express.json());
app.use('/competitions', competitionsRouter);
app.use('/athletes', athletesRouter);
app.use('/results', resultsRouter)
app.use(express.urlencoded({extended: false}));

sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
    return sequelize.sync({ force: false });
  })
  .then(() => {
    console.log("Banco de dados e tabelas criados!");
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });

// Health Check Route
app.get('/health', (req, res) => {
  res.status(200).send('funciona');
});

app.get('/ping', function (req, res, next) {
    res.send({'detail': "Ping GET!"});
});

app.use('/contest', contest_router);

// Error handler for 404 - Not Found
app.use(function (req, res, next) {
    next(createError(404));
});

// General Error Handler
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send({
        'error': true,
        'msg': err.message
    });
});

app.listen(port, host, () => {
    console.log(`Express is running at http://${host}:${port}`);
});
