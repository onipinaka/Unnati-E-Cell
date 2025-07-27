module.exports = {
  extends: [
    'react-app',
    'plugin:prettier/recommended', // Prettier plugin
    'prettier' // Turns off ESLint formatting rules that conflict with Prettier
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'warn'
  }
};
