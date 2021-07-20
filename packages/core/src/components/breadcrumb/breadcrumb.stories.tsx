import notes from './readme.md';
import { text, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { html } from 'lit-html';

export default {
  title: '@midwest-design/core/Breadcrumbs',
  component: 'midwest-breadcrumb',
  decorators: [withKnobs, withA11y],
  notes: {
    markdown: notes,
  },
  argTypes: {
    title: {
      defaultValue: 'Breadcrumb!',
      control: { type: 'text' },
    },
  },
};

export const single = ({ title, ...args }) => html`<midwest-breadcrumb>${title}</midwest-breadcrumb>`;
