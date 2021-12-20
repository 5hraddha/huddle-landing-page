import styled from 'styled-components/macro';

export const Hero = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;

  & > div {
    margin: 0 80px 0 0;
    flex: 1;
  }

  h1 {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-size: 43px;
    font-weight: 600;
    line-height: 1.5;
  }

  p {
    margin: 0;
    padding: 20px 0 30px;
  }

  img {
    margin: 0;
    padding: 0;
    width: 50%;
  }

  @media (max-width: ${({ theme }) => theme.layouts.desktop }) {
    & > div {
      margin: 0 60px 0 0;
    }

    h1 {
      font-size: 33px;
    }
  }

  @media (max-width: ${({ theme }) => theme.layouts.tablet }) {
    flex-direction: column;

    & > div {
      margin: 0;
      text-align: center;
    }

    img {
      margin: 40px 0 30px 0;
      width: 100%;
    }
  }

  @media (max-width: ${({ theme }) => theme.layouts.mobile }) {
    h1 {
      font-size: 23px;
    }
  }
`;
