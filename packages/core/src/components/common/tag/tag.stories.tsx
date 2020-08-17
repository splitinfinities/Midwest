import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { text } from '@storybook/addon-knobs';

storiesOf('UI|Tags', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Default', () => {
    return `
      <midwest-tag>${text("Text", "Nice!")}</midwest-tag>
    `;
  });