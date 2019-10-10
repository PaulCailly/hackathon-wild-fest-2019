import { fontSize } from '@styles/theme/helpers/font-size/fontSize';

describe('fontSize', () => {
    it('should return the correct value when called with "none" as argument', () => {
        const output = fontSize('sm');
        expect(output).toBe('0.875rem');
    });
});
