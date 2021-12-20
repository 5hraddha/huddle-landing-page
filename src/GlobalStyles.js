import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Poppins:wght@600&display=swap');

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

  @media (max-width: 768px) {
    body {
      font-size: 16px;
    }
  }
`;

export default GlobalStyles;