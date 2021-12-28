import React        from 'react';
import * as Styled  from './styles';
import Button       from '../Button';

function CallToAction(){
  return (
    <Styled.CallToAction>
      <h2>Ready to build your community?</h2>
      <Button bgColor='hsl(322, 100%, 66%)' textColor='hsl(100, 100%, 100%)'>
        Get Started For Free
      </Button>
    </Styled.CallToAction>
  );
}

export default CallToAction;