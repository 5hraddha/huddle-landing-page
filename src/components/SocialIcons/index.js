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
      <ul>
        <li>
          <a href="https://twitter.com" aria-label="Twitter">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://facebook.com" aria-label="Facebook">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </Styled.SocialIcons>
  );
}

export default SocialIcons;