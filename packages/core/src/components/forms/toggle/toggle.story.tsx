import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { text, select, boolean } from '@storybook/addon-knobs';
// import { text, boolean, select } from '@storybook/addon-knobs';

const story_template = (title, code) => `<midwest-code><h2 slot="feature">${title}</h2><template>${code}</template></midwest-code>`;


storiesOf('Forms|Toggle', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Default', () => {
    return story_template("Inline", `<midwest-form>
  <midwest-toggle 
    name="option-one" 
    label="${text("Label", "Do you want things?")}" 
    single="${boolean("Single", false)}" 
    block="${boolean("Block", false)}" 
    stacked="${boolean("Stacked", false)}" 
    description="${text("Description", "This is about things!")}" 
    size="${select("Size", ["small", "default", "large"], "default")}"
    type="${select("Toggle type", ["checkbox", "radio"], "checkbox")}"
    >
    <midwest-item value="one">
      <copy-wrap>
        <h2>Option one!</h2>
        <p>Upsell this option baby!!</p>
        <midwest-button ghost size="tiny">More Details</midwest-button>
      </copy-wrap>
    </midwest-item>
    <midwest-item value="two">
      <copy-wrap>
        <h2>Option two!</h2>
        <p>Upsell this option baby!!</p>
        <midwest-button ghost size="tiny">More Details</midwest-button>
      </copy-wrap>
    </midwest-item>
    <midwest-item value="three">
      <copy-wrap>
        <h2>Option three!</h2>
        <p>Upsell this option baby!!</p>
        <midwest-button ghost size="tiny">More Details</midwest-button>
      </copy-wrap>
    </midwest-item>
  </midwest-toggle>
</midwest-form>`);
  });