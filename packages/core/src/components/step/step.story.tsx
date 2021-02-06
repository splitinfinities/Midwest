import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { text, boolean } from '@storybook/addon-knobs';

storiesOf('UI|Step', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Default', () => {
    return `<midwest-step open="${boolean("Open", false)}" complete="${boolean("Complete", false)}" error="${boolean("Error", false)}">${text("Step name", "Step one")}</midwest-step>`;
  });