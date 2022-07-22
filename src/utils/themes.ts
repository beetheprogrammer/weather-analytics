export interface ITheme {
	backgroundColor?: string;
	alternateBackgroundColor?: string;
	textColor?: string;
	type?: string;
	blackColor?: string;
	whiteColor?: string;
	pinterestLogoColor?: string;
	dotColor?: string;
	backgroundColorOuter?: string;
	mainColor?: string;
	backgroundColorOuterDarker?: string;
	backgroundColorInner?: string;
	mainTextColor: string;
	subTextColor: string;
}

export const THEME: { [key: string]: ITheme } = {
	light: {
		backgroundColorOuter: "#E1E1E1",
		backgroundColorInner: "#FFF",
		backgroundColorOuterDarker: "#878787",
		backgroundColor: "#E9ECED",
		alternateBackgroundColor: "#27282B",
		textColor: "#000",
		type: "light",
		blackColor: "#000",
		whiteColor: "#fff",
		pinterestLogoColor: "#e60022",
		dotColor: "#E1E1E1",
		mainColor: "#1F3554",
		mainTextColor: "#1F3554",
		subTextColor: "#878787",
	},
	dark: {
		backgroundColorOuter: "#0c1421",
		backgroundColorOuterDarker: "#fff",

		backgroundColor: "#27282B",
		alternateBackgroundColor: "#fff",
		textColor: "#fff",
		type: "dark",
		blackColor: "#000",
		whiteColor: "#fff",
		pinterestLogoColor: "#fff",
		dotColor: "#FFF",
		mainTextColor: "#fff",
		subTextColor: "#878787",
	},
};
