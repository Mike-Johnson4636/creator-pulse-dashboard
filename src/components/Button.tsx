'use client';
import * as stylex from '@stylexjs/stylex';
import { vars } from '@/styles/tokens.stylex.js';

const styles = stylex.create({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${vars.spaceSm} ${vars.spaceLg}`,
    borderRadius: vars.radius,
    // Split border into individual properties
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: vars.surfaceAlt,
    backgroundColor: vars.surface,
    color: vars.text,
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'transform .06s ease, background-color .15s ease',
    ':hover': { transform: 'translateY(-1px)', backgroundColor: vars.surfaceAlt },
    ':active': { transform: 'translateY(0px)' },
  },
  primary: { 
    backgroundColor: vars.brand, 
    borderColor: vars.brand,  // already using individual property here
    color: '#fff' 
  },
  subtle: {},
});

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: 'primary' | 'subtle';
};

export default function Button({ tone = 'subtle', children, ...rest }: Props) {
  return (
    <button {...rest} {...stylex.props(styles.base, tone && styles[tone])}>
      {children}
    </button>
  );
}