import { ViewTemplate, html } from '@microsoft/fast-element';
import type { Meta, StoryFn } from '@storybook/html';
import {
    createMatrix,
    sharedMatrixParameters
} from '../../utilities/tests/matrix';
import {
    createMatrixThemeStory,
    createStory
} from '../../utilities/tests/storybook';
import { hiddenWrapper } from '../../utilities/tests/hidden';
import { demoTag } from '..';

const metadata: Meta = {
    title: 'Tests/Demo',
    parameters: {
        ...sharedMatrixParameters()
    }
};

export default metadata;

const component = (): ViewTemplate => html`
    <${demoTag}>Demo</${demoTag}>
`;

export const demoThemeMatrix: StoryFn = createMatrixThemeStory(
    createMatrix(component)
);

export const hiddenDemo: StoryFn = createStory(
    hiddenWrapper(html`<${demoTag} hidden>Hidden Demo</${demoTag}>`)
);
