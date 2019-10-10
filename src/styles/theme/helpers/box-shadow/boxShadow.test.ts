import { boxShadow } from '@styles/theme/helpers/box-shadow/boxShadow';

describe('boxShadow', () => {
    it('should return the correct value when called with "none" as argument', () => {
        const output = boxShadow('none');
        expect(output).toBe('none');
    });
});
