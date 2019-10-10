import { borderRadius } from '@styles/theme/helpers/border-radius/borderRadius';

describe('borderRadius', () => {
    it('should return the correct value when called with "none" as argument', () => {
        const output = borderRadius('none');
        expect(output).toBe('0');
    });
});
