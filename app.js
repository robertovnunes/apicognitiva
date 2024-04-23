const app = require('./conf/server');

const userRouter = require('./api/routes/user');


app.use('/users', userRouter);

app.get('/', (req, res) => {
    res.send('APICognitiva está funcionando');
});

app.get('/docs', (req, res) => {
    res.sendFile(__dirname + '/docs/index.html');
});
