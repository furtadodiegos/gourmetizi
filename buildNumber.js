const { version } = require('./package.json');

module.exports = function resolveVersion(env) {
  const data = version.split('-');
  const splitedVersion = data[0].split('.');

  const MAJOR = splitedVersion[0];
  const MINOR = env === 'feature' ? parseInt(splitedVersion[1], 10) + 1 : splitedVersion[1];
  const PATCH = env === 'feature' ? 0 : parseInt(splitedVersion[2], 10) + 1;

  return `${MAJOR}.${MINOR}.${PATCH}-${parseInt(data[1], 10) + 1}`;
};
