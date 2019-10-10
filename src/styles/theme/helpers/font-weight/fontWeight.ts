import { theme } from '@styles/theme/theme';

type Weight = 'hairline' | 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';

export const fontWeight = (weight: Weight): string => theme.fontWeight[weight];
