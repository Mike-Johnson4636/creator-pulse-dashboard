'use client';
import * as stylex from '@stylexjs/stylex';
import { vars } from '@/app/styles/tokens.stylex.js';

const styles = stylex.create({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${vars.spaceSm} ${vars.spaceLg}`,
    borderRadius: vars.radius,
    border: `1px solid ${vars.surfaceAlt}`,
    backgroundColor: vars.surface,
    color: vars.text,
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'transform .06s ease, background-color .15s ease',
    ':hover': { transform: 'translateY(-1px)', backgroundColor: vars.surfaceAlt },
    ':active': { transform: 'translateY(0px)' },
  },
  primary: { backgroundColor: vars.brand, borderColor: vars.brand, color: '#fff' },
  subtle: {},
});

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: 'primary' | 'subtle';
};

export default function Button({ tone = 'subtle', children, ...rest }: Props) {
  return (
    <button {...stylex.props(styles.base, tone === 'primary' ? styles.primary : styles.subtle)} {...rest}>
      {children}
    </button>
  );
}
