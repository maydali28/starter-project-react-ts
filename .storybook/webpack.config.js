const path = require("path");
const { lstatSync, readdirSync } = require("fs");

const basePath = path.resolve(__dirname, "../", "packages");
const packages = readdirSync(basePath).filter((name) =>
  lstatSync(path.join(basePath, name)).isDirectory(),
);

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(tsx|ts)$/,
    use: [
      {
        loader: require.resolve("awesome-typescript-loader"),
      },
      {
        loader: require.resolve("react-docgen-typescript-loader"),
      },
    ],
  });
  config.resolve.extensions.push(".ts", ".tsx");
  Object.assign(config.resolve.alias, {
    ...packages.reduce(
      (acc, name) => ({
        ...acc,
        [`@taxi/${name}`]: path.join(basePath, name, "src"),
      }),
      {},
    ),
  });
  return config;
};
