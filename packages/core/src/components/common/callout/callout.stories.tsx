import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { text, select } from '@storybook/addon-knobs';

storiesOf('UI|Callout', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Default', () => {
    return `
      <midwest-callout type=${select("Type", ["alert", "error", "info", "success", "default"], "default")}>
        <p>${text("Text", "Hello there!!")} <a href="#">${text("Link Text", "Click here")}</a></p>
      </midwest-callout>
    `;
  });
