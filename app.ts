// const express = require('express');
// const app = express();
// const routes = require('./src/routes')
// import routes from './src/routes/v1';

import express from 'express';
// import routes from './src/routes/v1';
const app: express.Application = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Hello')
})

// app.use('/v1', routes)

app.listen(port, () => {
    console.log(`listening port ${port}`)
})