import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

const req = require.context('../packages', true, /.story.tsx?$/)

function loadStories() {
  addDecorator(withKnobs)
  req.keys().forEach(file => req(file));
}

configure(loadStories, module);
