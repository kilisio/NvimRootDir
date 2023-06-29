const pkgson = require("../../package.json");

const pkg = pkgson.version;
const semVer = pkg.split('.').map(stringy => stringy * 1);

semVer[1] = semVer[1] + 1;

exports.ver = semVer.join('.');

