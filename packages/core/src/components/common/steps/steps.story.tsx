import notes from './readme.md';
import { storiesOf } from '@storybook/html';
// import { text, boolean, select } from '@storybook/addon-knobs';

storiesOf('UI|Steps', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Default', () => {
    return `
      <midwest-steps>
        <midwest-step complete>Step one</midwest-step>
        <midwest-step open>Step two</midwest-step>
        <midwest-step>Step three</midwest-step>
      </midwest-steps>
    `;
  });