const pkgson = require("../../package.json");

const pkg = pkgson.version;
const semVer = pkg.split('.').map(stringy => stringy * 1);

semVer[2] = semVer[2] + 1;

exports.ver = semVer.join('.');

