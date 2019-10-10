import { letterSpacing } from '@styles/theme/helpers/letter-spacing/letterSpacing';

describe('letterSpacing', () => {
    it('should return the correct value when called with "tighter" as argument', () => {
        const output = letterSpacing('tighter');
        expect(output).toBe('-0.05em');
    });
});
