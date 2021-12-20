import React        from 'react';
import * as Styled  from './styles';

function Nav({children}){
  return (
    <Styled.Nav>
      {children}
    </Styled.Nav>
  );
}

export default Nav;