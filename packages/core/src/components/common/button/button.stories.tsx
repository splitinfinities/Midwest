import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { text, boolean, select } from '@storybook/addon-knobs';
import {storyTemplate} from '@midwest-design/common';


storiesOf('Core|Button ✅', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Default', () => {
    return storyTemplate("Buttons", `<midwest-button 
      active="${boolean("Active", false)}" 
      block="${boolean("Block", false)}" 
      contrast="${boolean("Contrast", false)}" 
      danger="${boolean("Danger", false)}" 
      disabled="${boolean("Disabled", false)}" 
      ghost="${boolean("Ghost", false)}" 
      invert="${boolean("Invert", false)}" 
      label="${text("Label", "nice")}" 
      outline="${boolean("Outline", false)}" 
      padding="${select("Padding", ["large", "small", "tiny", "default"], "default")}" 
      size="${select("Size", ["large", "small", "tiny", "default"], "default")}" 
      tag="${select("Tag", ["button", "link", "span", "submit"], "link")}" 
      outline="${boolean("Outline", false)}" 
      processable="${boolean("Processable", false)}">
        ${text("Button Text", "Submit")}
      </midwest-button>`);
  });