import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { text, boolean, select } from '@storybook/addon-knobs';

export const story_template = (title, code) => `<midwest-code><h2 slot="feature">${title}</h2><template>${code}</template></midwest-code>`;

storiesOf('Forms|Input ✅', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Default', () => {
    return story_template("Inputs", `<midwest-input 
  type="${select("Type", ["text","password","tags","textarea","email","file","hidden","number","search","tel","time","date","date-range","url"], "text")}" 
  name="${text("Name", "post")}" 
  value="${text("Value", "")}" 
  placeholder="${text("Placeholder", "Field Placeholder")}" 
  hide-state="${boolean("Hide State", false)}" 
  label="${text("Label", "Field Label")}" 
  tooltip="${text("Tooltip", "Helpful Tooltip")}" 
  description="${text("Description", "Field Description")}">
  </midwest-input>`);
  });

  