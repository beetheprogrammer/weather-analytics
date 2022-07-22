import styled from "styled-components";
import { ITheme } from "../../utils/themes";

export const HomePageContainer = styled("div")`
	height: 100vh;
	width: 100vw;
  padding: 3% 5%;
`;

export const WeatherDetailsContainer = styled("div")`
	height: 100%;
	width: 100%;
	background-color: ${({ theme }: { theme: ITheme }) => theme.backgroundColor};
  display: grid;
  grid-template-columns: .6fr 2fr 1fr;
`;

export const WeatherDetailsSubView = styled("div")`
	background-color: ${({ theme }: { theme: ITheme }) => theme.mainColor || "red"} !important;
`;
