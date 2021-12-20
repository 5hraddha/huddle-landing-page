import React        from 'react';
import * as Styled  from './styles';

function Button({children, bgColor, textColor}){
  return (
    <Styled.Button bgColor={bgColor} textColor={textColor}>
      {children}
    </Styled.Button>
  );
}

export default Button;