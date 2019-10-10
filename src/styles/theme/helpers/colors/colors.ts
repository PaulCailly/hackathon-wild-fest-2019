/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { theme } from '@styles/theme/theme';

export type Color =
    | 'transparent'
    | 'black'
    | 'white'
    | 'gray'
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'teal'
    | 'blue'
    | 'indigo'
    | 'purple'
    | 'pink';

export type Variant = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export const colors = (color: Color, variant?: Variant) =>
    variant ? theme.colors[color][variant] : theme.colors[color];
