import { colors, Variant } from '@styles/theme/helpers/colors/colors';

describe('colors', () => {
    it('should return the correct value when called with "transparent" as argument', () => {
        const output = colors('transparent');
        expect(output).toBe('transparent');
    });
});
