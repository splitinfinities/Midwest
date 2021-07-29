import notes from './readme.md';
import { text, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { html } from 'lit-html';

export default {
  title: '@midwest-design/core/calendar/calendar-date',
  component: 'midwest-calendar-date',
  decorators: [withKnobs, withA11y],
  notes: {
    markdown: notes,
  },
  argTypes: {
    start: {
      type: 'date',
      control: 'date',
      defaultValue: new Date(),
    },
    end: {
      type: 'date',
      control: 'date',
      defaultValue: new Date(),
    },
  },
};

export const WebComponent = ({ content, start, end, ...args }) =>
  html`<midwest-calendar-date start="${new Date(start).toISOString()}" end="${new Date(end).toISOString()}" ...="${spreadProps(args)}"></midwest-calendar-date>`;
