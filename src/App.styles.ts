import { createGlobalStyle } from "styled-components";
import { ITheme } from "./utils/themes";

export const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${({ theme }: { theme: ITheme }) =>
			theme.backgroundColorOuter};
    font-family: "Acme", 'Playfair Display', serif;
    letter-spacing: .05rem;
    font-size: 16px;
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  button, img{
    border: none;
  }

  input {
    background-color: transparent;

		::placeholder {
			color: inherit;
      font-family: inherit;
      letter-spacing: .05rem;
		}
    :focus{
    outline: none;
}
	}
`;
