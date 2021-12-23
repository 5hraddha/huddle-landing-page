import styled from "styled-components/macro";

export const Footer = styled.footer`
  margin: 0;
  padding: 150px 0 60px;
  background: ${({theme}) => theme.colors.footer};
  color: hsl(100, 100%, 100%);
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 60px;
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;

  & > p {
    align-self: flex-end;
  }

  @media (max-width: ${({ theme }) => theme.layouts.mobile }) {
    padding: 0 40px;
  }
`;

export const Flex = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  & > ul {
    margin: 40px 0 0;
    list-style: none;
    width: 100%;
    max-width: 300px;

    & > li {
      margin: 0 0 20px;
      display: flex;
      align-items: flex-start;

      & > a {
        text-decoration: none;
        color: hsl(100, 100%, 100%);
        border-bottom: 1px solid transparent;
        transition: all ease-in-out .3s;
      }

      & > a:hover {
        cursor: pointer;
        border-bottom: 1px solid hsl(100, 100%, 100%);
      }

      & > img {
        margin: 5px 20px 0 0;
        width: 20px;
      }
      }
    }
  }
`;