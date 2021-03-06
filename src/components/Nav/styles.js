import styled from 'styled-components/macro';

export const Nav = styled.nav`
  margin: 0;
  padding: 0 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.layouts.mobile }) {
    flex-direction: column;
    justify-content: center;
  }
`;