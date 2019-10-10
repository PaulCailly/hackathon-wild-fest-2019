import { screens } from '@styles/theme/helpers/screens/screens';

describe('screens', () => {
    it('should return the correct value when called with "sm" as argument', () => {
        const output = screens('sm');
        expect(output).toBe('640px');
    });
});
