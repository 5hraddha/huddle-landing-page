import styled     from "styled-components/macro";

export const Card = styled.section`
  margin: 40px 0;
  padding: 60px 40px 60px 80px;
  display: flex;
  gap: 10%;
  flex-direction: ${({direction}) => direction};
  align-items: center;
  background: ${({theme}) => theme.colors.body};
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .15);

  & > div {
    flex: 1;
  }

  h2 {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-size: 28px;
    font-weight: 600;
    line-height: 1.5;
  }

  p {
    margin: 0;
    padding: 20px 0;
    color: hsl(208, 11%, 55%);
  }

  img {
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 600px;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: ${({theme}) => theme.layouts.tablet}) {
    padding: 60px 50px;
    flex-direction: column-reverse;

    h2 {
      padding: 20px 0 0;
      text-align: center;
    }

    p {
      text-align: center;
    }
  }

  @media (max-width: ${({theme}) => theme.layouts.mobile}) {
    padding: 40px;
    h2 {
      font-size: 20px;
    }
  }
`;