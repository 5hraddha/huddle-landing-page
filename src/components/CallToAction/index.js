import React        from 'react';
import * as Styled  from './styles';
import Button       from '../Button';

/**
 * The **CallToAction** component representing an instruction to the visitor 
 * in order to encourage them to take some kind of action on the webpage.
 *
 * @version 1.0.0
 * @author Shraddha
 */

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