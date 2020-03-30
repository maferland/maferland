const path = require("path");
const withSass = require("@zeit/next-sass");

module.exports = withSass({
  webpack(config, options) {
    config.resolve.alias["~"] = path.resolve(__dirname);
    return config;
  }
});
