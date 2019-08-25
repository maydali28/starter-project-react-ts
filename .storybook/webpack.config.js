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
  return config;
};
