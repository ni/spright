import { html } from '@microsoft/fast-element';
import { buttonTag } from '@ni/nimble-components/dist/esm/button';
import type { Demo } from '.';

export const template = html<Demo>`
    <${buttonTag}>
        <slot></slot>
    </${buttonTag}>
`;
