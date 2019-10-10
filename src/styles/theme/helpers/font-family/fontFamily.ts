import { theme } from '@styles/theme/theme';

type Type = 'sans' | 'serif' | 'mono';

export const fontFamily = (type: Type): string => theme.fontFamily[type].join(',');
