import { theme } from '@styles/theme/theme';

type Spacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 58 | 56 | 64;

export const spacing = (spacing: Spacing): string => theme.spacing[spacing];
