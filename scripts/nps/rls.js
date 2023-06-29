const pkgson = require("../../package.json");

const pkg = pkgson.version;
const semVer = pkg.split('.').map(stringy => stringy * 1);

semVer[0] = semVer[0] + 1;
semVer[1] = 0;
semVer[2] = 0;

exports.ver = semVer.join('.');

