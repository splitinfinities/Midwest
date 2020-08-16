import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { text, boolean } from '@storybook/addon-knobs';

export const storyTemplate = (title, code) => `<midwest-code><h2 slot="feature">${title}</h2><template>${code}</template></midwest-code>`;

storiesOf('UI|Item Group ✅', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Default', () => {
      return storyTemplate("Item Group",`<midwest-item-group 
        name="${text("Group Name", "A group!")}"
        horizontal="${boolean("Horizontal", false)}">
      <midwest-item>Facebook</midwest-item>
      <midwest-item>Twitter</midwest-item>
      <midwest-item>Linkedin</midwest-item>
      <midwest-item>Instagram</midwest-item>
    </midwest-item-group>`);
  });
