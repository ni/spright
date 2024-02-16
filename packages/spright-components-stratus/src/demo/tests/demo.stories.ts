import { html } from '@microsoft/fast-element';
import type { Meta, StoryObj } from '@storybook/html';
import {
    createUserSelectedThemeStory,
} from '../../utilities/tests/storybook';


const metadata: Meta = {
    title: 'Components/Demo',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'A temporary stand-in component until this package has a real component'
            }
        },
        actions: {}
    },
    render: createUserSelectedThemeStory(html`
        <button>Demo</button>
    `)
};

export default metadata;

export const demo: StoryObj = {};
