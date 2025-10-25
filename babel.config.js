module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['@stylexjs/babel-plugin', {
      dev: true,
      genConditionalClasses: true,
      styleResolution: 'application-ordered'
    }]
  ]
};