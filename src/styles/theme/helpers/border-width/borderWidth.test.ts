import { borderWidth } from '@styles/theme/helpers/border-width/borderWidth';

describe('borderWidth', () => {
    it('should return the correct value when called with "none" as argument', () => {
        const output = borderWidth('none');
        expect(output).toBe('0');
    });
});
