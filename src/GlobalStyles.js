import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    line-height: 1.5;
  }

  @media (max-width: ${({ theme }) => theme.layouts.mobile }) {
    body {
      font-size: 15px;
    }
  }
`;

export default GlobalStyles;