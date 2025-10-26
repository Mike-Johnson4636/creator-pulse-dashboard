const stylex = require('@stylexjs/stylex');

// Define tokens using StyleX's preferred format
const TOKENS = stylex.defineVars({
  bg: '#0b0b0b',
  surface: '#111111',
  surfaceAlt: '#181818',
  text: '#eaeaea',
  subtext: '#b3b3b3',
  brand: '#4f46e5',
  spaceXs: '4px',
  spaceSm: '8px',
  spaceMd: '12px',
  spaceLg: '16px',
  radius: '12px',
});

// Export both ways (CommonJS for plugin, ESM for runtime)
module.exports = { TOKENS };
module.exports.TOKENS = TOKENS;
exports.vars = TOKENS;
Object.defineProperty(exports, '__esModule', { value: true });