import styled from "styled-components/macro";

export const SocialIcons = styled.div`
  margin: 40px 0 0;
  padding: 0;

  & > ul {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul > li {
    list-style: none;

    & > a {
      margin: 0 10px 0 0;
      padding: 0;
      height: 40px;
      width: 40px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: hsl(100, 100%, 100%);
      border: 1px solid hsl(100, 100%, 100%);
      border-radius: 50%;
      text-decoration: none;
      transition: all ease-in-out .3s;
    }

    & > a:hover {
      cursor: pointer;
      border: 1px solid hsl(322, 100%, 66%);
      color: hsl(322, 100%, 66%);
    }
  }

  @media (max-width: ${({theme}) => theme.layouts.tablet}) {
    align-self: center;
  }
`;