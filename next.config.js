const { parsed: localEnv } = require("dotenv").config();
const webpack = require("webpack");

module.exports = {
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    return config;
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    SERVER_GRAPHQL: process.env.SERVER_GRAPHQL,
  },
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
  },
};
