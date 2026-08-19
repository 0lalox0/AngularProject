const path = require('path');

const serverDistPath = path.join(
  process.cwd(),
  'dist',
  'montesinos-landing',
  'server',
  'server.mjs',
);

module.exports = import(serverDistPath).then((module) => module.reqHandler);