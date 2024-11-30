require('dotenv').config();

const apiUrl = process.env.NODE_ENV === 'production'
    ? 'https://carambar-jokes-api-xbz1.onrender.com/blagues/random'
    : process.env.API_URL; // This will use 'http://localhost:4000' in development

const frontendUrl = process.env.FRONTEND_URL;



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

// CORS setup
const corsOptions = {
  origin: [process.env.FRONTEND_URL], // Use environment variable for frontend URL
  methods: ['GET', 'POST'],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

//API ROUTE
app.use('/', apiRoutes);

const port = process.env.PORT || 4000;

app.listen(port, async () => {
  console.log(`Server running on ${process.env.NODE_ENV} at http://localhost:${port}`);
  await connectToDb();
});
