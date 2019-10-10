import { theme } from '@styles/theme/theme';

type Spacing = 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose';

export const lineHeight = (spacing: Spacing): string => theme.lineHeight[spacing];
