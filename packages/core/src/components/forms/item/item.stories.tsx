import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { text, select } from '@storybook/addon-knobs';

export const story_template = (title, code) => `<midwest-code><h2 slot="feature">${title}</h2><template>${code}</template></midwest-code>`;
const shape: any[] = ["default", "circle", "rectangle", "message", "diamond", "star"];

storiesOf('UI|Items ✅', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Default', () => {
    return story_template("Item",`<midwest-item 
      value="${text("Value", "asdf")}"
      avatar="${text("Avatar", "")}"
      avatar-src="${text("Avatar Image", "https://source.unsplash.com/900x900/?nature,water")}"
      avatar-shape="${select("Avatar Shape", shape, "default")}"
      >
      ${text("Copy", "An item!")}
    </midwest-item>`);
  });