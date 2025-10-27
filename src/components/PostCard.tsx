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
    // No shorthands in StyleX:
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: vars.surfaceAlt,
  },
  title: { fontSize: 16, fontWeight: 700, color: vars.text },
  meta: { fontSize: 12, color: vars.subtext },
  body: { fontSize: 14, color: vars.text, lineHeight: '1.5' },
});

type Props = {
  platform: 'x' | 'tiktok' | 'instagram' | 'threads';
  title: string;
  meta: string;
  body: string;
};

export default function PostCard({ platform, title, meta, body }: Props) {
  return (
    <article {...stylex.props(styles.card)}>
      <div {...stylex.props(styles.title)}>
        {title} · {platform.toUpperCase()}
      </div>
      <div {...stylex.props(styles.meta)}>{meta}</div>
      <div {...stylex.props(styles.body)}>{body}</div>
    </article>
  );
}