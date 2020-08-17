import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { text } from '@storybook/addon-knobs';

storiesOf('UI|Tooltips', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Default', () => {
    return `
      <p class="relative"><midwest-tooltip>${text("Text", "nice")}</midwest-tooltip></p>
    `;
  });