import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { boolean, text, number } from '@storybook/addon-knobs';

const storyTemplate = (title: string, code: string) => `<midwest-code><h2 slot="feature">${title}</h2><template>${code}</template></midwest-code>`;

storiesOf('Forms|Rich Text ✅', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Default', () => {
    return storyTemplate("Rich Text", `<midwest-rich-text 
  description="${text("Description", "Description")}" 
  tooltip="${text("Tooltip", "Tooltip copy")}"  
  label="${text("Label", "Label copy")}" 
  inline="${boolean("Inline", false)}" 
  max="${number("Max Characters", 0)}" 
  enable-rich="${boolean("Rich", false)}" 
  enable-mentions="${boolean("Mentions", false)}" 
  enable-emojis="${boolean("Emojis", false)}"
  enable-links="${boolean("Links", false)}">${text("Value", "nice!")}</midwest-rich-text>`);
  });