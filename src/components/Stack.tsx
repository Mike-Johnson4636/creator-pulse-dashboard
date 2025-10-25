'use client';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  stack: {
    display: 'flex',
    gap: 12,
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  col: { flexDirection: 'column' },
});

type Props = React.PropsWithChildren<{ direction?: 'row' | 'column' }>;

export default function Stack({ direction = 'column', children }: Props) {
  return (
    <div {...stylex.props(styles.stack, direction === 'row' ? styles.row : styles.col)}>
      {children}
    </div>
  );
}
