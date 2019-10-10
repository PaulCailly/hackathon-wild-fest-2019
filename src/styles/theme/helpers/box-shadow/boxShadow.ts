import { theme } from '@styles/theme/theme';

type Size = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'inner' | 'outline';

export const boxShadow = (size: Size): string => theme.boxShadow[size];
