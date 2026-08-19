const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const candidates = [
  path.join(__dirname, '..', 'dist', 'montesinos-landing', 'server', 'server.mjs'),
  path.join(__dirname, '..', '..', 'dist', 'montesinos-landing', 'server', 'server.mjs'),
  path.join(process.cwd(), 'dist', 'montesinos-landing', 'server', 'server.mjs'),
  path.join(process.cwd(), '..', 'dist', 'montesinos-landing', 'server', 'server.mjs'),
];

const serverDistPath = candidates.find((p) => fs.existsSync(p));

if (!serverDistPath) {
  throw new Error(
    `server.mjs not found. __dirname=${__dirname} cwd=${process.cwd()} tried=${candidates.join(' | ')}`,
  );
}

let reqHandlerPromise;

function getReqHandler() {
  if (!reqHandlerPromise) {
    reqHandlerPromise = import(pathToFileURL(serverDistPath).href).then(
      (module) => module.reqHandler,
    );
  }
  return reqHandlerPromise;
}

module.exports = async (req, res) => {
  const reqHandler = await getReqHandler();
  return reqHandler(req, res);
};