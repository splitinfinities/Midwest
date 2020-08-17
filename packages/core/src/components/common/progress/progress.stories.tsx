import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { boolean, number } from '@storybook/addon-knobs';

const story_template = (title, code) => `<midwest-code><h2 slot="feature">${title}</h2><template>${code}</template></midwest-code>`;

storiesOf('Forms|Progress ✅', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Default', () => {
    return story_template("Progress", `<midwest-progress value="${number("Value", 10)}" secondary="${number("Secondary Value", 20)}" max="${number("Max", 200)}" indeterminate="${boolean("Indeterminate", false)}" rounded="${boolean("Rounded", false)}" editable="${boolean("Editable", false)}" slender="${boolean("Slender", false)}"></midwest-progress>`);
  });