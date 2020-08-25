import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { text, select } from '@storybook/addon-knobs';

export const story_template = (title, code) => `<midwest-code><h2 slot="feature">${title}</h2><template>${code}</template></midwest-code>`;


storiesOf('Forms|Labels ✅', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Default', () => {
    return story_template("Labels", `<midwest-label size="${select("Type", ["small","default","large"], "text")}">${text("Copy", "Label")}</midwest-label>`);
  });