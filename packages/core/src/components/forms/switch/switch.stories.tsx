import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { text, select } from '@storybook/addon-knobs';

const story_template = (title, code) => `<midwest-code><h2 slot="feature">${title}</h2><template>${code}</template></midwest-code>`;

storiesOf('Forms|Switch ✅', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Default', () => {
    return story_template("midwest-switch", `<midwest-switch size="${select("Size", ["small", "default", "large"], "default")}">
  <p slot="yes">${text("Enabled Content", "Enabled!")}</p>
  <p slot="no">${text("Disabled Content", "Disabled!!!")}</p>
</midwest-switch>`);
  });