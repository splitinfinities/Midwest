import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { boolean, select, text } from '@storybook/addon-knobs';

const story_template = (title, code) => `<midwest-code><h2 slot="feature">${title}</h2><template>${code}</template></midwest-code>`;

storiesOf('Forms|Selects ✅', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Default', () => {
    return story_template("Select", `<midwest-form>
      <midwest-select 
        name="post[assignments]" 
        size="${select("Size", ["small", "default", "large"], "default")}" 
        inline="${boolean("Inline", false)}" 
        multiple="${boolean("Multiple", false)}" 
        open="${boolean("Open", false)}" 
        position="${select("Position", ["up", "down", "auto"], "auto")}"
        description="${text("Description", "description")}" 
        label="${text("Label", "label")}" 
        tooltip="${text("Tooltip", "tooltip")}" 
        placeholder="${text("Placeholder", "Choose something...")}"
      >
        <midwest-item-group name="Roles">
          <midwest-item name="post[assignments]" value="abd" avatar="Moderators">Moderators</midwest-item>
          <midwest-item name="post[assignments]" value="abe" avatar="Admins">Admins</midwest-item>
        </midwest-item-group>
        <midwest-item-group name="Users">
          <midwest-item name="post[assignments]" value="abf" avatar="Ben Pankonin">Ben Pankonin</midwest-item>
          <midwest-item name="post[assignments]" value="abg" avatar="Becky Voss">Becky Voss</midwest-item>
          <midwest-item name="post[assignments]" value="abh" avatar="Matt Secoske">Matt Secoske</midwest-item>
          <midwest-item name="post[assignments]" value="abi" avatar="Ben Parker">Ben Parker</midwest-item>
          <midwest-item name="post[assignments]" value="abj" avatar="Jordyn Swanson">Jordyn Swanson</midwest-item>
        </midwest-item-group>
      </midwest-select>
    </midwest-form>`);
  });



