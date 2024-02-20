import { css } from '@microsoft/fast-element';
import {
    bodyFont,
    bodyFontColor
} from '@ni/nimble-components/dist/esm/theme-provider/design-tokens';

export const styles = css`
    :host {
        font: ${bodyFont};
        color: ${bodyFontColor};
    }
`;
