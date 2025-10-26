'use client';
import * as stylex from '@stylexjs/stylex';
import { vars } from '@/styles/tokens.stylex.js';

const styles = stylex.create({
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: vars.spaceSm,
    padding: vars.spaceLg,
    borderRadius: vars.radius,
    backgroundColor: vars.surface,
    // Split border into individual properties
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: vars.surfaceAlt,
  },
  title: { fontSize: 16, fontWeight: 700, color: vars.text },
  meta: { fontSize: 12, color: vars.subtext },
  body: { fontSize: 14, color: vars.text, lineHeight: 1.5 as any },
});

// ... rest of the file stays the same