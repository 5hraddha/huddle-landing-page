import styled from 'styled-components/macro';

export const Header = styled.header`
  padding: 40px 0;
  background: ${({theme}) => theme.colors.header};
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 60px;
  width: 100%;
  max-width: 1440px;

  @media (max-width: ${({ theme }) => theme.layouts.mobile }) {
    padding: 0 20px;
  }
`