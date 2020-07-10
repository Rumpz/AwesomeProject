module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-throw-expressions'],
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: './src',
      },
    ],
  ],
};
