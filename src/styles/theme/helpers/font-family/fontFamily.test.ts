import { fontFamily } from '@styles/theme/helpers/font-family/fontFamily';

describe('fontFamily', () => {
    it('should return the correct value when called with "sans" as argument', () => {
        const output = fontFamily('sans');
        expect(output).toBe(
            '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
        );
    });
});
