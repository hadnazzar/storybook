import {configure, setAddon, addDecorator} from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

import { withKnobs } from '@storybook/addon-knobs';
addDecorator(withKnobs);

setAddon(JSXAddon);

const req = require.context('../src', true , /.stories.js$/)

function loadStories(){
    require('./WelcomeStory')
    req.keys().forEach(file => {
        req(file)
    });
}

configure(loadStories, module)