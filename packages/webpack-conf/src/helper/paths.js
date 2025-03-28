const fs = require('fs');
const path = require('path');


const ROOT_DIR = fs.realpathSync(process.cwd());

function pathResolve(...args) {
  return path.resolve(ROOT_DIR, ...args);
}

function resolveExistPath(...args) {
  try {
    const fullPath = path.resolve(ROOT_DIR, ...args);

    if (fs.existsSync(fullPath)) {
      return fullPath;
    }
  } catch (e) {
    console.warn(`${args.join('/')} not found`);
  }

  return null;
}


module.exports = {
  ROOT_DIR,
  SRC_DIR: pathResolve('src'),
  BUILD_DIR: pathResolve('dist'),
  PUBLIC_DIR: pathResolve('public'),
  pathResolve,
  resolveExistPath,
};
