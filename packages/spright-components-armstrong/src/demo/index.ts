import { DesignSystem, FoundationElement } from '@microsoft/fast-foundation';
import { styles } from './styles';
import { template } from './template';

declare global {
    interface HTMLElementTagNameMap {
        'spright-demo': Demo;
    }
}

/**
 * A demo component (delete after a real component has been added)
 */
export class Demo extends FoundationElement {
    public sayHello(): void {
        // eslint-disable-next-line no-alert
        alert('Hello!');
    }
}

const sprightDemo = Demo.compose({
    baseName: 'demo',
    template,
    styles
});

DesignSystem.getOrCreate().withPrefix('spright').register(sprightDemo());
export const demoTag = 'spright-demo';
