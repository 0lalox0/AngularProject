const path = require('path');
const { pathToFileURL } = require('url');

let reqHandlerPromise;

function getReqHandler() {
  if (!reqHandlerPromise) {
    const serverDistPath = path.join(
      process.cwd(),
      'dist',
      'montesinos-landing',
      'server',
      'server.mjs',
    );
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