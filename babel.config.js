module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@": "./src",
        },
        extensions: [
          '.ios.js',
          '.android.js',
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
          ".json"
        ]
      },
    ]
  ]
};
