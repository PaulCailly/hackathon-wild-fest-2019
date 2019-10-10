import { fontWeight } from '@styles/theme/helpers/font-weight/fontWeight';

describe('fontWeight', () => {
    it('should return the correct value when called with "hairline" as argument', () => {
        const output = fontWeight('hairline');
        expect(output).toBe('100');
    });
});
