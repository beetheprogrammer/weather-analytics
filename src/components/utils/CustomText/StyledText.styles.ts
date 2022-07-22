import styled from "styled-components";
import { FONTS } from "../../../utils/fonts";
import { ITheme } from "../../../utils/themes";

export const StyledText = styled.p<{ size?: string; bold?: boolean; isMainColor?: boolean }>`
	color: ${({ isMainColor, theme }: { isMainColor?: boolean; theme: ITheme }) =>
		isMainColor ? theme.mainTextColor : theme.subTextColor};
	font-size: ${({ size }: any) => size || FONTS.normal};
	font-weight: ${({ bold }: { bold?: boolean }) => bold && `600`};
`;

// text-align: center;
