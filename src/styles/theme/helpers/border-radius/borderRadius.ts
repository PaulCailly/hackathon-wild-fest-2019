import { theme } from '@styles/theme/theme';

type Size = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'full';

export const borderRadius = (size: Size): string => theme.borderRadius[size];
