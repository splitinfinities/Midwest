import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { boolean } from '@storybook/addon-knobs';

export const story_template = (title, code) => `<midwest-code><h2 slot="feature">${title}</h2><template>${code}</template></midwest-code>`;

storiesOf('Forms|Form ✅', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Default', () => {
    return story_template("Forms",`<midwest-form ajax="${boolean("Enable Ajax", false)}" novalidate="${boolean("Disable Validation", false)}">
  <midwest-grid>
    <midwest-input name="user[name]" label="Username"></midwest-input>
    <midwest-input name="user[password]" type="password" label="Password"></midwest-input>
    <midwest-button type="submit">Submit</midwest-button>
  </midwest-grid>
</midwest-form>
<br />
<midwest-form-debug></midwest-form-debug>`);
  });