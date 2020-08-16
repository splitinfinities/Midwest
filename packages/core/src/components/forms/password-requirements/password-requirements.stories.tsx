import notes from './readme.md';
import { storiesOf } from '@storybook/html';
// import { text, boolean, select } from '@storybook/addon-knobs';

export const story_template = (title, code) => `<midwest-code><h2 slot="feature">${title}</h2><template>${code}</template></midwest-code>`;

storiesOf('Forms|Password Requirements', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Default', () => {
    return story_template("Password Requirements", `<midwest-grid>
  <midwest-input type="password" name="pass" label="password" placeholder="your password"></midwest-input>
  <midwest-password-requirements for="pass"></midwest-password-requirements>
</midwest-grid>`);
  });