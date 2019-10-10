import { theme } from '@styles/theme/theme';

type Size = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export const fontSize = (size: Size): string => theme.fontSize[size];
