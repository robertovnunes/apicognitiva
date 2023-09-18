const app = require('./conf/server');

const userRouter = require('./api/routes/user');
const rpdRouter = require('./api/routes/rpd');
const deRouter = require('./api/routes/de');


app.use('/users', userRouter);
app.use('/rpd', rpdRouter);
app.use('/de', deRouter);

app.get('/', (req, res) => {
    res.send('APICognitiva está funcionando');
});

app.get('/docs', (req, res) => {
    res.sendFile(__dirname + '/docs/index.html');
});
