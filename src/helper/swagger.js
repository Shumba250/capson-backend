import swaggerJSDoc from 'swagger-jsdoc';
import { version } from '../../package.json';

const option = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'CAPSTON API DOC',
      version,
      description:
        "This is the documentation of my capstone backend api. GET, POST, PATCH, DELETE API'S for Articles, contact messages, user's, admin",
    },
    components: {
      securitySchemes: {
        token: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: [
    './src/routes/apis/*.js',
    './src/routes/routes.js',
    './src/models/*.js',
  ],
};

const specs = swaggerJSDoc(option);

export default specs;
