require('ts-node/register');

module.exports = {
  android: require('./android').default,
  ios: require('./ios').default,
};
