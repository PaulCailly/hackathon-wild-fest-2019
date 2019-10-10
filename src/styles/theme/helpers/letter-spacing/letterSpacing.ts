import { theme } from '@styles/theme/theme';

type Spacing = 'tighter' | 'tight' | 'none' | 'wide' | 'wider' | 'widest';

export const letterSpacing = (spacing: Spacing): string => theme.letterSpacing[spacing];
