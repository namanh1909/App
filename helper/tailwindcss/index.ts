import * as rntalwindcss from 'react-native-tailwindcss';

export const color = {
	...rntalwindcss.color,
	error: '#FF4B34',
	primary: '#27AE60',
	orangeActive: '#F2C94C',
	backgroundSecond: '#FAF7F2',
};

export const colors = { ...color };

export const t = {
	...rntalwindcss.t,
	textPrimary: { color: color.primary },
	bgPrimary: { backgroundColor: color.primary },
	borderPrimary: { borderColor: color.primary },
	tintPrimary: { tintColor: color.primary },

	textOrangeActive: { color: color.orangeActive },
	bgOrangeActive: { backgroundColor: color.orangeActive },
	borderOrangeActive: { borderColor: color.orangeActive },
	fontHelveticaNeue: {
		fontFamily: 'HelveticaNeue',
	},

	roundedXl: {
		borderRadius: 10,
	},
  rounded2Xl: {
		borderRadius: 14,
	},
  rounded3Xl: {
		borderRadius: 16,
	},
};

export const tw = {
	...rntalwindcss.tw,
};

export const theme = { ...t };

export const tailwind = { ...t };
