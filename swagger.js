const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


// Setup Swagger config
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Puskesmas',
      version: '1.0.0',
      description: 'testing api puskesmas', // Deskripsi API kamu
    },
    servers: [
      {
        url: 'http://localhost:3001', // Ganti dengan port yang digunakan di server.js
      },
    ],
  },
  apis: ['./routes/*.js'], // File yang mau dibaca dokumentasinya
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = swaggerSpec; // Export swaggerSpec untuk digunakan di server.js
