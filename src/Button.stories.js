import React from 'react';

import {storiesOf} from '@storybook/react'
import {Button} from './Button'

storiesOf('Button',module)
.add('with background', () => ( 
    <Button bg='gray'>Hello World</Button>
))
.add('with green background', () => ( 
    <Button bg='green'>Hello World</Button>
))