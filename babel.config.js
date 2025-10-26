module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      'next/babel',
      '@babel/preset-typescript'
    ],
    plugins: [
      [
        'module-resolver',
        {
          "root": ["./"],
          "alias": { "@": "./src" },
          "extensions": [".js", ".jsx", ".ts", ".tsx", ".stylex.ts", ".stylex.js"]
        }
      ],
      [
        '@stylexjs/babel-plugin',
        {
          dev: process.env.NODE_ENV !== 'production',
          genConditionalClasses: true,
          styleXImports: 'from-package',
          // Add these specific options:
          unstable_moduleResolution: {
            type: 'commonJS',
            rootDir: './src'
          },
          appendFeaturesGlobally: true
        }
      ]
    ]
  };
};