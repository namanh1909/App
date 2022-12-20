import { TailwindStyles, TailwindColors } from 'react-native-tailwindcss';

export type CustomTailWindStyles = TailwindStyles & {
	textPrimary: string;
	bgPrimary: string;
};
export type CustomTailWindColors = TailwindColors & {
	primary: string;
};

export const t: CustomTailWindStyles;
export const tw: CustomTailWindStyles;
export const theme: CustomTailWindStyles;
export const tailwind: CustomTailWindStyles;
export const color: CustomTailWindColors;
export const colors: CustomTailWindColors;
