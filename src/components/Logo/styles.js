import styled from "styled-components/macro";

export const Logo = styled.img`
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 200px;

  @media (max-width: ${({ theme }) => theme.layouts.mobile }) {
    padding: 0 0 40px;
  }
`;