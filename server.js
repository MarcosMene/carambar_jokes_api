const express = require('express');
const cors = require('cors');
const apiRoutes = require('./src/routes/jokesRoutes.js');
const { connectToDb } = require('./src/config/database.js');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

//create options to JsDoc
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Jokes API',
      version: '1.0.0',
      description: 'API for jokes',
    },
    servers: [
      {
        url: 'http://localhost:4000',
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};

const specs = swaggerJsDoc(options);

const app = express();

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

//middleware
app.use(cors());
app.use(express.json());
app.use('/', apiRoutes);

app.listen(4000, async () => {
  console.log('Server is listening');
  await connectToDb();
});
