import styled from "styled-components";
import { ITheme } from "../../utils/themes";

export const WeatherDetailsMainView = styled("div")`
	/* background-color: ${({ theme }: { theme: ITheme }) =>
		theme.backgroundColor}; */
    /* padding: 2rem; */
`;

export const WeatherItem = styled("div")`
	background-color: ${({ theme }: { theme: ITheme }) =>
		theme.backgroundColorOuter};
	width: 100%;
	height: 10rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
  text-align: center;
	border-radius: 1rem;
	gap: 1rem;
`;

export const PinLocation = styled("div")`
	background-color: ${({
		theme,
		rounded,
	}: {
		theme: ITheme;
		rounded: boolean;
	}) => theme.backgroundColorOuter};
	border-radius: ${({ rounded }: { rounded: boolean }) =>
		rounded ? "1000rem" : "0rem"};
	display: flex;
	justify-content: center;
	align-items: center;
	height: 3rem;
	width: 3rem;

	:hover {
		cursor: pointer;
		opacity: 0.7;
	}
`;

export const SearchBar = styled("div")`
	display: flex;
	align-items: center;
	padding: 0.7rem;
	gap: 0.5rem;
	background-color: ${({ theme }: { theme: ITheme }) =>
		theme.backgroundColorOuter};
  width: 70%;

	input {
		color: white;
		border: none;
		font-weight: bold;
		color: ${({ theme }: { theme: ITheme }) =>
			theme.backgroundColorOuterDarker};
		width: 100%;
		display: inline-block;
		font-family: inherit;

		::placeholder {
			color: inherit;
		}
	}
`;
