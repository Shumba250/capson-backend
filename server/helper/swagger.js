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
    './server/routes/apis/*.js',
    './server/routes/routes.js',
    './server/models/*.js',
  ],
};

const specs = swaggerJSDoc(option);

export default specs;
