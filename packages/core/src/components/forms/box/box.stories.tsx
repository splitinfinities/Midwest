import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { boolean } from '@storybook/addon-knobs';

storiesOf('UI|Box', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Default', () => {
    return `
      <midwest-box focused="${boolean("Focused", false)}" checked="${boolean("Checked", false)}" radio="${boolean("Radio", false)}"></midwest-box>
    `;
  });
