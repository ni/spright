import { Accordion, accordionTag } from '..';

describe('Accordion', () => {
    it('should export its tag', () => {
        expect(accordionTag).toBe('nimble-accordion');
    });

    it('can construct an element instance', () => {
        expect(document.createElement('nimble-accordion')).toBeInstanceOf(
            Accordion
        );
    });
});
