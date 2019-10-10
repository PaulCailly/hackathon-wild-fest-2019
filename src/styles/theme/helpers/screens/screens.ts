import { theme } from '@styles/theme/theme';

type Size = 'sm' | 'md' | 'lg' | 'xl';

export const screens = (size: Size): string => theme.screens[size];
