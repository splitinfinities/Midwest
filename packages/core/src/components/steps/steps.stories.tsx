import notes from './readme.md';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { html } from 'lit-html';
import { spreadProps } from '@open-wc/lit-helpers';

export default {
  title: '@midwest-design/core/steps',
  component: 'midwest-steps',
  decorators: [withKnobs, withA11y],
  notes: {
    markdown: notes,
  },
  argTypes: {},
};

export const WebComponent = ({ ...args }) => html`<midwest-steps ...="${spreadProps(args)}">
  <midwest-step>One</midwest-step>
  <midwest-step>Two</midwest-step>
  <midwest-step>Three</midwest-step>
</midwest-steps>`;
