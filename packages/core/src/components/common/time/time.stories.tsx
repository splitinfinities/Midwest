import notes from './readme.md';
import { storiesOf } from '@storybook/html';
// import { text, boolean, select } from '@storybook/addon-knobs';

storiesOf('Helpers|Time', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Default', () => {
    return `<midwest-time></midwest-time>`;
  });