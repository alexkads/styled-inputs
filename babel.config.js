module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    [
      "@babel/preset-react",
      {
        pragma: "dom", // default pragma is React.createElement (only in classic runtime)
        pragmaFrag: "DomFrag", // default is React.Fragment (only in classic runtime)
        throwIfNamespace: false, // defaults to true
        runtime: "classic", // defaults to classic
        // "importSource": "custom-jsx-library" // defaults to react (only in automatic runtime)
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/plugin-syntax-jsx",
    "@babel/plugin-transform-react-jsx",
    "@babel/plugin-transform-flow-strip-types",
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    "syntax-trailing-function-commas",
    [
      "@babel/plugin-proposal-object-rest-spread",
      { loose: true, useBuiltIns: true },
    ],
    ["@babel/plugin-transform-template-literals", { loose: true }],
    "@babel/plugin-transform-literals",
    "@babel/plugin-transform-arrow-functions",
    "@babel/plugin-transform-block-scoped-functions",
    "@babel/plugin-transform-object-super",
    "@babel/plugin-transform-shorthand-properties",
    "@babel/plugin-transform-computed-properties",
    "@babel/plugin-transform-for-of",
    ["@babel/plugin-transform-spread", { loose: true, useBuiltIns: true }],
    "@babel/plugin-transform-parameters",
    [
      "@babel/plugin-transform-destructuring",
      { loose: true, useBuiltIns: true },
    ],
    ["@babel/plugin-transform-block-scoping", { throwIfClosureRequired: true }],
  ],
  ignore: ["**/*.test.tsx", "**/*.stories.tsx"],
};
