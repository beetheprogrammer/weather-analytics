import styled from "styled-components";
import { ITheme } from "../../utils/themes";

export const SavedLocations = styled("div")`
	margin-top: 1.2rem;
`;

export const ActiveDot = styled("div")`
	height: 0.8rem;
	width: 0.8rem;
	border-radius: 1000rem;
	background-color: ${({ theme, active }: { theme: ITheme; active: boolean }) =>
		active ? theme.mainColor : "transparent"};
	position: absolute;
	right: 0;
`;
export const SavedLocation = styled("div")`
	/* background-color: ${({ theme }: { theme: ITheme }) =>
		theme.backgroundColorInner} ; */
	margin: 1rem 0;
	/* padding: .3rem; */
	display: flex;
	/* justify-content: space-between */
	position: relative;
	align-items: center;
	/* color: white; */
	color: ${({ theme, active }: { theme: ITheme; active: boolean }) =>
		active ? theme.mainColor : theme.backgroundColorOuterDarker};

	:hover {
		cursor: pointer;
		/* color: ${({ theme }: { theme: ITheme }) => theme.mainColor}; */

		.activeDot {
			background-color: ${({
				theme,
			}: {
				theme: ITheme;
			}) => (theme.backgroundColorOuterDarker)};
		}
	}
`;

export const SavedLocationIcon = styled("div")`
	/* background-color: gray; */
	background-color: ${({ theme }: { theme: ITheme }) =>
		theme.backgroundColorInner};
	padding: 0.3rem;
	border-radius: 0.3rem;
	display: flex;
	margin-right: 0.8rem;
	justify-content: center;
	align-items: center;
`;
