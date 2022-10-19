import express from 'express';
import routes from './routes';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi, { SwaggerOptions } from 'swagger-ui-express';

const app: express.Application = express();
const port = 3000;

// Swaager 설정
const swaggerDefinition = {
    info: {
        // API informations (required)
        title: 'API Document', // Title (required)
        version: '1.0.0', // Version (required)
        description: 'Main API' // Description (optional)
    },
};

// Options for the swagger docs
const options: SwaggerOptions = {
    // Import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // Path to the API docs
    apis: ['./src/routes/*Route.ts']
  };
const swaggerSpec = swaggerJSDoc(options);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// app.get('/', (req: express.Request, res: express.Response) => {
//     res.send('Hello!@@123')
// })

// routes 등록
app.use('/', routes)

app.listen(port, () => {
    console.log(`listening port ${port}`)
})