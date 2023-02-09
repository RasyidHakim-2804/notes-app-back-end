/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable eol-last */

const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.Server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0', // supaya host menentukan sendiri sesuai environment
    routes: {
      cors: {
        origin: ['*'], // membuat data pada notes dapat dikonsumsi oleh luar
      },
    },
  });

  server.route(routes);
  await server.start();
  console.log(`Server started on ${server.info.uri}`);
};

init();
// http://notesapp-v1.dicodingacademy.com/
// ini websitenya
// install nanoid untuk random id