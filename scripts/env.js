const path = require('path');

const resolvePath = (base) => path.resolve(__dirname, base);
const NODE_ENV = process.env.NODE_ENV;

// if (!NODE_ENV) {
//   throw Error('NODE_ENV is not specified！');
// }
const basePath = resolvePath('..');
const dotEnvFiles = [
  `${basePath}/.env.development.local`,
  `${basePath}/.env.development`
]

dotEnvFiles.forEach(filePath => {
  require('dotenv').config({
    path: filePath
  })
})

