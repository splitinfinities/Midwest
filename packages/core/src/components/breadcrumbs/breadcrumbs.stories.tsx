import notes from './readme.md';
import { text, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { html } from 'lit-html';

export default {
  title: '@midwest-design/core/breadcrumbs',
  component: 'midwest-breadcrumbs',
  decorators: [withKnobs, withA11y],
  notes: {
    markdown: notes,
  },
  argTypes: {},
};

export const basic = ({ ...args }) => html`<midwest-breadcrumbs>
  <midwest-breadcrumb>Home</midwest-breadcrumb>
  <midwest-breadcrumb>Nice</midwest-breadcrumb>
  <midwest-breadcrumb>Cool</midwest-breadcrumb>
</midwest-breadcrumbs>`;
