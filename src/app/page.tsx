import * as stylex from '@stylexjs/stylex';
import Stack from '@/components/Stack';
import Button from '@/components/Button';
import PostCard from '@/components/PostCard';
// import { TOKENS as vars } from '@/styles/tokens.stylex';
// import { TOKENS as vars } from '@/styles/tokens.stylex.ts';
// import { TOKENS as vars } from '../styles/tokens.stylex'; 
// import { vars } from '@/styles/tokens.stylex';
//import { vars } from '@/styles/tokens.stylex.js';
import { vars } from '@/styles/tokens.stylex.js';


const styles = stylex.create({
  page: { minHeight: '100vh', backgroundColor: vars.bg, padding: '24px' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' },
  title: { color: vars.text, fontSize: 18, fontWeight: 700 },
});

export default function Home() {
  return (
    <main {...stylex.props(styles.page)}>
      <div {...stylex.props(styles.header)}>
        <div {...stylex.props(styles.title)}>Creator Pulse — Dev Preview</div>
        <Stack direction="row">
          <Button tone="primary">Add Source</Button>
          <Button>Filters</Button>
        </Stack>
      </div>

      <Stack>
        <PostCard
          platform="x"
          title="OpenAI DevDay snippets"
          meta="2h · @example"
          body="Shipping a cross-platform feed explorer. First UI slice done!"
        />
        <PostCard
          platform="instagram"
          title="Creator collab"
          meta="5h · @sample_ig"
          body="Testing a new content format. Reels cadence + carousel recap."
        />
      </Stack>
    </main>
  );
}
