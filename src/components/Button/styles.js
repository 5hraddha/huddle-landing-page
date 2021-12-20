import styled from "styled-components/macro";

export const Button = styled.button`
  margin: 0;
  padding: 15px 60px;
  font-size: 16px;
  font-weight: 700;
  background-color: ${({ bgColor }) => bgColor || 'hsl(100, 100%, 100%)'};
  color: ${({ textColor }) => textColor || 'hsl(192, 100%, 9%)'};
  border: none;
  border-radius: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .15);
  transition: all ease-in-out .3s;

  &:hover {
    cursor: pointer;
    opacity: .9;
    transform: scale(.98);
  }
`;