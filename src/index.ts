import express from 'express';
import routes from './routes/v1';
// import "reflect-metadata";

const app: express.Application = express();
const port = 3000;

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello!@@123')
})

app.use('/v1', routes)

app.listen(port, () => {
    console.log(`listening port ${port}`)
})