const fs = require('fs');
const plist = require('plist');

const pathToInfoPlist = './ios/myapp/Info.plist';

const infoPlist = plist.parse(fs.readFileSync(pathToInfoPlist, 'utf8'));

const buildNumber = infoPlist.CFBundleVersion;

module.exports = { buildNumber };
