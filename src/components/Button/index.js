import React        from 'react';
import PropTypes    from 'prop-types';
import * as Styled  from './styles';

/**
 * The **Button** component representing the different buttons in the webpage
 *
 * @version 1.0.0
 * @author Shraddha
 */
function Button({children, bgColor, textColor}){
  return (
    <Styled.Button bgColor={bgColor} textColor={textColor}>
      {children}
    </Styled.Button>
  );
}

Button.propTypes = {
  /** Any JSX usually the label of the button */
  children  : PropTypes.any.isRequired,
  /** A *string* that specifies if the background color of the button should be something other that the default one */
  bgColor   : PropTypes.string,
  /** A *string* that specifies if the text color of the button should be something other that the default one */
  textColor   : PropTypes.string,
}

export default Button;