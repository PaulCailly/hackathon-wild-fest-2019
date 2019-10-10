import { theme } from '@styles/theme/theme';

type Size = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export const borderWidth = (size: Size): string => theme.borderWidth[size];
