import React        from 'react';
import * as Styled  from './styles';
import Button       from './../Button';
import Logo         from './../Logo';
import Nav          from './../Nav';
import Hero         from './../Hero';
import HeaderLogo   from './../../images/logo.svg';

/**
 * The **Header** component representing the header of the webpage
 *
 * @version 1.0.0
 * @author Shraddha
 */
function Header() {
  return (
    <Styled.Header>
      <Styled.Container>
        <Nav>
          <Logo src={HeaderLogo} alt="page logo having Huddle written in it" />
          <Button>Try It Free</Button>
        </Nav>
        <Hero />
      </Styled.Container>
    </Styled.Header>
  );
}

export default Header;