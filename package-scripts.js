const rls = require("./scripts/nps/rls.js");
const feat = require("./scripts/nps/feat.js");
const fix = require("./scripts/nps/fix.js");

module.exports = {
  scripts: {
    rls:
      "npm --no-git-tag-version version " +
      rls.ver +
      " && git add npm-shrinkwrap.json && git add -p package.json && conventional-changelog -p angular -i CHANGELOG.md -s -r 0 && git add CHANGELOG.md && git commit -m 'Release: v" +
      rls.ver +
      "' && git tag v" +
      rls.ver,
    feat:
      "npm --no-git-tag-version version " +
      feat.ver +
      " && git add npm-shrinkwrap.json && git add -p package.json && git-cz",
    fix:
      "npm --no-git-tag-version version " +
      fix.ver +
      " && git add npm-shrinkwrap.json && git add -p package.json && git-cz",
  },
};
