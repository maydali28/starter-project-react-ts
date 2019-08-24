module.exports = (api) => {
  api.cache(true);

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            browsers: "Last 2 Chrome versions, Firefox ESR",
            node: "10.15",
          },
        },
      ],
      [
        "@babel/preset-react",
        {
          development: process.env.BABEL_ENV !== "build",
        },
      ],
      "@babel/preset-typescript",
    ],
    env: {
      build: {
        ignore: [
          "**/*.test.tsx",
          "**/*.test.ts",
          "**/*.spec.tsx",
          "**/*.spec.ts",
          "**/*.story.tsx",
          "__snapshots__",
          "__tests__",
          "__stories__",
        ],
      },
    },
    ignore: ["node_modules"],
  };
};
