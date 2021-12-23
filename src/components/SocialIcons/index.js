import React from 'react';
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin
} from 'react-icons/fa';
import * as Styled from './styles';

function SocialIcons() {
  return (
    <Styled.SocialIcons>
      <li>
        <a href='https://twitter.com'>
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href='https://facebook.com'>
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href='https://linkedin.com'>
          <FaLinkedin />
        </a>
      </li>
    </Styled.SocialIcons>
  );
}

export default SocialIcons;