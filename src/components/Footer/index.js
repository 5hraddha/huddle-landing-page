import React        from 'react';
import * as Styled  from './styles';
import Logo         from '../Logo';
import SocialIcons  from '../SocialIcons';
import FooterLogo   from '../../images/logo_white.svg';
import LocationIcon from '../../images/icon-location.svg';
import PhoneIcon    from '../../images/icon-phone.svg';
import EmailIcon    from '../../images/icon-email.svg';

function Footer(){
  return (
    <Styled.Footer>
      <Styled.Container>
        <Logo src={FooterLogo} alt="page logo having Huddle written in it in white color" />
        <Styled.Flex>
          <ul>
            <li>
              <img src={LocationIcon} alt="location icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </li>
            <li>
              <img src={PhoneIcon} alt="phone icon" />
              <p>+1-543-123-4567</p>
            </li>
            <li>
              <img src={EmailIcon} alt="email icon" />
              <p>example@huddle.com</p>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">What We Do</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <SocialIcons />
        </Styled.Flex>
        <p>&copy;Copyright 2021 Huddle. All rights reserved</p>
      </Styled.Container>
    </Styled.Footer>
  );
}

export default Footer;