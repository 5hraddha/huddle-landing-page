import styled from 'styled-components/macro';

export const CallToAction = styled.section`
  margin: 20px auto;
  padding: 60px 40px;
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  background: ${({theme}) => theme.colors.body};
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .15);
  transform: translateY(100px);

  h2 {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-size: 28px;
    font-weight: 600;
    line-height: 1.5;
    text-transform: capitalize;
    text-align: center;
  }

  @media (max-width: ${({theme}) => theme.layouts.desktop}) {
    width: 80%;
  }

  @media (max-width: ${({theme}) => theme.layouts.tablet}) {
    width: 100%;
  }

  @media (max-width: ${({theme}) => theme.layouts.mobile}) {
    padding: 40px 20px;
    h2 {
      font-size: 20px;
    }
  }
`;